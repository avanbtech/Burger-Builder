import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type='bread-top' key={2}></BurgerIngredient>
            <BurgerIngredient type='cheese' key={4}></BurgerIngredient>
            <BurgerIngredient type='meat' key={3}></BurgerIngredient>
            <BurgerIngredient type='bread-bottom' key={1}></BurgerIngredient>
        </div>
    );
}

export default burger;