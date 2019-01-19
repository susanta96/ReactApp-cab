import React from 'react';
import classes from './Logo.module.css';


const logo = (props) => (
    <div className={classes.Logo}>
        <img src={require('../../assets/images/taxi.svg')} alt="Cablogo"/>
    </div>

);

export default logo;