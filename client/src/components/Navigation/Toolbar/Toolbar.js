import React from 'react'
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => {
    return(
        <header className={classes.Toolbar}>
            <Logo/>
        </header>
    );
}

export default toolbar;