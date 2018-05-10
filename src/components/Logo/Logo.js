import React from 'react';
import classes from './Logo.css';
import logoImg from '../../assets/logo.png';

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logoImg} alt="kota"/>
        </div>
    );
};

export default logo;
