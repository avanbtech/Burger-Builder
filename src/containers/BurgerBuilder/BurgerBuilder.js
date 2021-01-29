import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner.js';
import withErrorHandler from "../../components/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};
class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('/orders/ingredient.json')
            .then(response => {
                this.setState({ ingredients: response.data });
            }).catch(error => {
                this.setState({ error: true });
            });
    }

    updatePurchasingCancelation = () => {
        this.setState({ purchasing: false });
    }

    perchaseContinueHandler = () => {
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Ava',
                address: {
                    street: 'testStreet',
                    city: 'Vancouver',
                    country: 'Canada'
                },
                email: 'test@gmail.com'
            }
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchasing: false });
            }).catch(error => {
                this.setState({ loading: false, purchasing: false });
            })
    }

    updatePurchasingState = () => {
        this.setState({ purchasing: true });
    }

    updatePurchaseState(ingredients) {
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
                <Modal show={this.state.purchasing} cancel={this.updatePurchasingCancelation}>
                    {this.state.loading || !this.state.ingredients ? <Spinner /> :
                    <OrderSummary ingredients={this.state.ingredients}
                        purchaseCanceled={this.updatePurchasingCancelation}
                        purchaseContinued={this.perchaseContinueHandler}
                            price={this.state.totalPrice} />}
                </Modal>
                {this.state.ingredients ?
                    <React.Fragment>
                    <Burger ingredients={this.state.ingredients}></Burger>
                    <BuildControls
                    add={this.addItemHandler}
                    remove={this.removeItemHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={!this.state.purchasable}
                    ordered={this.updatePurchasingState}
                        />
                    </React.Fragment>
                    : this.state.error ? <p>ingredient cannot be loaded</p> : <Spinner />}

            </React.Fragment>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);