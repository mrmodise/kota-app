import React from 'react';
import {Button} from 'react-bootstrap';

const button = props => {
    return (
        <Button bsStyle={props.btnType}
        onClick={props.clicked}>{props.children}</Button>
    );
};

export default button;
