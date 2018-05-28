import React, {Component} from 'react';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            lettuce: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    };

    onCheckoutCancelHandler = () => {
        this.props.history.goBack();
    };

    onCheckoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');

    };

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                                 onCheckoutCancel={this.onCheckoutCancelHandler}
                                 onCheckoutContinue={this.onCheckoutContinueHandler}/>
            </div>
        );
    }
}

export default Checkout;
