import React from 'react';
import Kota from '../Kota/Kota';
import Button from '../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = props => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>You can never go wrong with ZA's number one Kota</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Kota ingredients={props.ingredients}/>
            </div>

            <Button btnType={"danger"} clicked={""}>Cancel</Button>
            <Button btnType={"success"} clicked={""}>Continue</Button>

        </div>
    );
};

export default checkoutSummary;
