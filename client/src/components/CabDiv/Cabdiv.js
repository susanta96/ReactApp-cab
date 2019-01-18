import React from 'react';
import classes from './Cabdiv.module.css';
import CabFeature from './CabFeatures/CabFeatures';
import Button from '../UI/Buttons/Buttons';


const cabdiv  = (props) => {
    return(
        <div className={classes.Cabdiv}>
            <img src={require('../../assets/images/Maruti-Alto.jpg')} alt="cab" />
            <div className={classes.details}>
                <ul>
                    <li><span>Cab  Model:</span> Maruti Suzuki</li>
                    <li><span>Cab  Type:</span> Micro</li>
                    <li><span>Rate:</span> 95 / hr </li>
                    <li><span>Cab  Feature:</span> <br />
                        <CabFeature type="wifi" />
                        <CabFeature type="seat" />
                        <CabFeature type="AC" />
                        <CabFeature type="cashless" />
                        <CabFeature type="luggage" />
                    </li>    
                </ul>
            </div>
            <div className={classes.btnStyle}>
            <Button btnType="Confirm">BOOK NOW</Button>
            </div>
        </div>
    );




};


export default cabdiv;
