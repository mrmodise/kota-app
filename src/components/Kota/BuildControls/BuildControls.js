import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    {label: 'lettuce', type: 'lettuce'},
    {label: 'bacon', type: 'bacon'},
    {label: 'cheese', type: 'cheese'},
    {label: 'meat', type: 'meat'},
];

const buildControls = props => {
    return (
        <div className={classes.BuildControls}>
            <p>Total Cost:<strong> {props.price.toFixed(2)} </strong></p>
            {controls.map(ctrl =>
                <BuildControl
                    key={ctrl.label}
                    isDisabled={props.disabled[ctrl.type]}
                    less={() => props.ingredientRemoved(ctrl.type)}
                    addMore={() => props.ingredientAdded(ctrl.type)}
                    ingredientLabel={ctrl.label}/>)}

                    <button
                        className={classes.OrderButton}
                        onClick={props.ordered}
                        disabled={!props.purchasable}>ORDER NOW</button>
        </div>
    );
};

export default buildControls;
