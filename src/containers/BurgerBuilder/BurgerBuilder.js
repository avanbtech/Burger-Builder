import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false
    }

    updatePurchaseState(ingredients) {
        //const ingredients = { ...this.state.ingredients };
        const sum = Object.values(ingredients)
            .reduce(((sum, el) => {
                return sum + el
            }), 0);
        this.setState({
            purchasable: (sum > 0)
        });
    }

    addItemHandler = (type) => {
        const amount = this.state.ingredients[type];
        const newIngredient = { ...this.state.ingredients };
        newIngredient[type] = amount + 1;
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients: newIngredient,
            totalPrice: newPrice
        });
        this.updatePurchaseState(newIngredient);
    }

    removeItemHandler = (type) => {
        const amount = this.state.ingredients[type];
        if (amount <= 0) {
            return;
        }
        const newIngredient = { ...this.state.ingredients };
        newIngredient[type] = amount - 1;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({
            ingredients: newIngredient,
            totalPrice: newPrice
        });
        this.updatePurchaseState(newIngredient);
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <React.Fragment>
                <div>Burger</div>
                <div>Build Controls</div>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls
                    add={this.addItemHandler}
                    remove={this.removeItemHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={!this.state.purchasable}
                >  </BuildControls>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;