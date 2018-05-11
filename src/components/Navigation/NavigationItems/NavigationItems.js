import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './Navigationitem/NavigationItem';

const navigationItems = props => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link={"/"} active={true}>Kota Builder</NavigationItem>
            <NavigationItem link={"/"}>Checkout</NavigationItem>
        </ul>
    );
};

export default navigationItems;
