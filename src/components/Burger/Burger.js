import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients);
    const items = [];
    transformedIngredients.map(i => {
        for (let n = 0; n < props.ingredients[i]; n++) {
            items.push(< BurgerIngredient type={i} key={i + n}></ BurgerIngredient>);
        }
    });

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type='bread-top' key={2}></BurgerIngredient>
            {items.length > 0 ? items : (<p> Please start adding ingredient! </p>)}
            <BurgerIngredient type='bread-bottom' key={1}></BurgerIngredient>
        </div>
    );
}

export default burger;