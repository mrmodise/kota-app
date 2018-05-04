import React from 'react';
import classes from './BuildControl.css';

const buildControl = props => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.ingredientLabel}</div>
            <button
                className={classes.Less}
                onClick={props.less}
                disabled={props.isDisabled}>Less</button>
            <button className={classes.More}
                    onClick={props.addMore}>More</button>
        </div>
    );
};

export default buildControl;
