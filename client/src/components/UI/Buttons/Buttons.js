import React from 'react';
import classes from './Buttons.module.css';

const Name = ( props ) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked} data={props.cabid}
        >{props.children}</button>

);


export default Name;