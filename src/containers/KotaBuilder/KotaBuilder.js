import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Kota from '../../components/Kota/Kota';
import BuildControls from '../../components/Kota/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Kota/BuildControls/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import ErrorHandler from '../../hoc/ErrorHander/ErrorHandler';

const INGREDIENT_PRICES = {
    lettuce: 0.5,
    cheese: 0.4,
    meat: 1,
    bacon: 1.3
};

class KotaBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 10,
        purchasable: false,
        purchasing: false,
        loading: false
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

    purchaseCancelHandler = () => {
      this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        this.setState({loading: true});

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice.toFixed(2),
            customer: {
                name: 'Praise Modise',
                address: {
                    street: 'Long street',
                    zip: 7780,
                    country: 'South Africa'
                },
                email: 'test@gmail.com'
            }
        };

        axios.post('/ordersss.json', order)
            .then(response => this.setState({loading: false, purchasing: false}))
            .catch(error => this.setState({loading: false, purchasing: false}));
    };

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data});
                this.setState({loading: false, purchasing: false});
            }).catch(error =>  this.setState({loading: false, purchasing: false}));
    }

    render() {
        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <= 0;

        let orderSummary = null;

        let kota = <Spinner/>;

        if(this.state.ingredients) {
            kota = (
                <Aux>
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

            orderSummary = <OrderSummary purchaseCancelled={this.purchaseCancelHandler}
                          price={this.state.totalPrice}
                          purchaseContinued={this.purchaseContinueHandler}
                          ingredients={this.state.ingredients}/>;
        }

        if(this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {kota}
            </Aux>
        );
    }
}

export default ErrorHandler(KotaBuilder, axios);
