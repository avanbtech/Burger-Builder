import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl.js';

const items = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => {
    return (
        <div className={styles.BuildControls}>
            {items.map(item =>
            (<BuildControl
                label={item.label}
                type={item.type}
                key={item.type}
                addItem={props.add}
                removeItem={props.remove}
                disabled={props.disabled}
            ></BuildControl>)
            )}
        </div>
    );
}

export default buildControls;