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
            <p >
                <strong>Total Price: ${props.price.toFixed(2)}</strong>
            </p>
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
            <button
                className={styles.OrderButton}
                disabled={props.purchasable}
            >ORDER NOW</button>
        </div>
    );
}

export default buildControls;  