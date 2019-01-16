import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './CabFeatures.module.css';

class cabfeature extends Component {

  render() {
    let cabfeature = null;

    switch( this.props.type) {
        case ('wifi') :
            cabfeature = <div className={classes.Box}><i class="fa fa-wifi"> FREE WIFI</i></div>;
            break;

        case ('AC'):
            cabfeature = <div className={classes.Box}><i class="fa fa-snowflake-o"> PERSONAL AC CAB</i></div>;
            break;
        case ('cashless'):
            cabfeature = <div className={classes.Box}><i class="fa fa-cc-visa"> CASHLESS RIDES</i></div>;
            break;
        case ('seat'):
            cabfeature = <div className={classes.Box}><span className={classes.BoxSeat}></span> EXTRA SEAT AVAILABLE</div>;
            break;
        case ('luggage'):
            cabfeature = <div className={classes.Box}><i class="fa  fa-briefcase"> EXTRA LUGGAGE SUPPORT</i></div>;
            break;
        default: cabfeature = null;
    }
    return cabfeature;
    
  }
}

cabfeature.PropTypes = {
    type: PropTypes.string.isRequired
};

export default cabfeature;