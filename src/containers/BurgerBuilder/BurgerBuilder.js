import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger.js'; 

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    render() {
        return (
            <React.Fragment>
                <div>Burger</div>
                <div>Build Controls</div>
                <Burger ingrediens={this.state.ingredients}></Burger>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;