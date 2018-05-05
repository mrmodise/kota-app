import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Kota from '../../components/Kota/Kota';
import BuildControls from '../../components/Kota/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Kota/BuildControls/OrderSummary/OrderSummary';

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
        totalPrice: 0,
        purchasable: false,
        purchasing: false
    };

    addIngredientHandler = type => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updateIngredients = {...this.state.ingredients};
        updateIngredients[type] = updatedCount;

        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({totalPrice: newPrice, ingredients: updateIngredients});

        this.updatePurchases(updateIngredients)
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

        this.updatePurchases(updateIngredients);
    };

    updatePurchases(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({purchasable: sum > 0});
    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    render() {
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0;

        return (
            <Aux>
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Kota ingredients={this.state.ingredients}>Kota</Kota>
                <BuildControls
                    disabled={disabledInfo}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientAdded={this.addIngredientHandler}/>
            </Aux>
        );
    }
}

export default KotaBuilder;
