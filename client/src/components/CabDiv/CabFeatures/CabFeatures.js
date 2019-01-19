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
            cabfeature = <div className={classes.Box}><i class="fa fa-credit-card"> CASHLESS RIDES</i></div>;
            break;
        case ('e_seats'):
            cabfeature = <div className={classes.Box}><i class="fa fa-child"> EXTRA SEAT AVAILABLE</i></div>;
            break;
        case ('e_luggage'):
            cabfeature = <div className={classes.Box}><i class="fa fa-suitcase"> EXTRA LUGGAGE SUPPORT</i></div>;
            break;
        default: cabfeature = null;
    }
    return cabfeature;
    
  }
}

cabfeature.propTypes = {
    type: PropTypes.string.isRequired
};

export default cabfeature;