import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Kota from '../../components/Kota/Kota';
import BuildControls from '../../components/Kota/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: 0.4,
    meat: 1,
    bacon: 1.3
};

class KotaBuilder extends Component {
    state = {
        ingredients: {
            lettuce: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        },
        totalPrice: 2
    };

    addIngredientHandler = type => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updateIngredients = {...this.state.ingredients};
        updateIngredients[type] = updatedCount;

        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
    };

    removeIngredientHandler = type => {
        const ingredientLength = this.state.ingredients[type];

        if (ingredientLength <= 0) {
            return;
        }

        const updatedCount = ingredientLength - 1;
        const updateIngredients = {...this.state.ingredients};
        updateIngredients[type] = updatedCount;

        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

        this.setState({totalPrice: newPrice, ingredients: updateIngredients});
    };

    render() {
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0;

        return (
            <Aux>
                <Kota ingredients={this.state.ingredients}>Kota</Kota>
                <BuildControls
                    disabled={disabledInfo}
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientAdded={this.addIngredientHandler}/>
            </Aux>
        );
    }
}

export default KotaBuilder;
