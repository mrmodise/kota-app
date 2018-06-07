import React, {Component, Fragment} from 'react';
import Button from '../../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate() {
    }

    render() {
        let ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}:</span> {this.props.ingredients[igKey]}
                    </li>);
            });

        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>{ingredientSummary}</ul>
                <b>Total Price: {this.props.price.toFixed(2)}</b>
                <p>Continue to Checkout?</p>
                <Button clicked={this.props.purchaseCancelled} btnType={"danger"}>CANCEL</Button> &nbsp;
                <Button clicked={this.props.purchaseContinued} btnType={"success"}>CONTINUE</Button>
            </Fragment>
        );
    }
}

export default OrderSummary;
