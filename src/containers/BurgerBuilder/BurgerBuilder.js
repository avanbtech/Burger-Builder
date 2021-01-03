import React, { Component } from 'react';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient.js';

class BurgerBuilder extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div>Burger</div>
                <div>Build Controls</div>
                <BurgerIngredient type='bread-bottom' key={1}></BurgerIngredient>
                <BurgerIngredient type='bread-top' key={2}></BurgerIngredient>
                <BurgerIngredient type='meat' key={3}></BurgerIngredient>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;