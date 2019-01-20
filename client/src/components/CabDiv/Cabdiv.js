import React from 'react';
import classes from './Cabdiv.module.css';
import CabFeature from './CabFeatures/CabFeatures';
import Button from '../UI/Buttons/Buttons';
import { withRouter } from 'react-router-dom';

const cabdiv  = (props) => {

    
    // console.log(props);



    return(
        <div className={classes.Cabdiv}>
            <img src={require('../../assets/images/'+ props.cabinfo.image)} alt="cab" />
            <div className={classes.details}>
                <ul>
                    <li><span>Cab  Model:</span> {props.cabinfo.model}</li>
                    <li><span>Cab  Type:</span> {props.cabinfo.type} </li>
                    <li><span>Rate:</span> {props.rate} {props.cabinfo.rate}/ hr </li>
                    <li><span>Cab  Feature:</span> <br />
                       {props.cabinfo.wifi === 1 ? <CabFeature type="wifi" /> : null} 
                       {props.cabinfo.e_seats === 1 ? <CabFeature type="e_seats" /> : null} 
                       {props.cabinfo.AC === 1 ? <CabFeature type="AC" /> : null} 
                       {props.cabinfo.cashless === 1 ? <CabFeature type="cashless" /> : null} 
                       {props.cabinfo.e_luggage === 1 ? <CabFeature type="e_luggage" /> : null} 
                    </li>    
                </ul>
            </div>
            <div className={classes.btnStyle}>
            <Button btnType="Confirm" clicked={props.bookingHandler}>BOOK NOW</Button>
            </div>
        </div>
    );




};


export default withRouter(cabdiv);
