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
            {controls.map(ctrl =>
                <BuildControl
                    key={ctrl.label}
                    isDisabled={props.disabled[ctrl.type]}
                    less={() => props.ingredientRemoved(ctrl.type)}
                    addMore={() => props.ingredientAdded(ctrl.type)}
                    ingredientLabel={ctrl.label}/>)}
        </div>
    );
};

export default buildControls;
