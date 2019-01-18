import React from 'react';
import Aux from '../../hoc/Auxx/Auxx';
import classes from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar , Logo , Backdrop</div>
        <main className={classes.Layout}>
            {props.children}
        </main>
    </Aux>
);

export default layout;