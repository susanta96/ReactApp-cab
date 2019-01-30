import React, { Component } from 'react';
import classes from './FilterBar.module.css';
import Checkbox from '@material-ui/core/Checkbox';

class Filterbar extends Component {
    // state= {
    //     checkMicro: false,
    //     checkMini: false,
    //     checkPrime: false,
    //     below100: false,
    //     below200: false,
    //     above200: false,
    //     AC: false,
    //     cashless: false,
    //     wifi: false,
    //     e_seats: false
    // }

    // handleChange = name => event => {
    //     this.setState({ [name] : event.target.checked});
    // };

    
    render() {
        // console.log(this.props.check.checkMicro);
        return (
            <div className={classes.FilterBox}>
                <h2>Filter Bar</h2><hr />
                <h4>By Category:</h4>
                <Checkbox
                checked={this.props.check.checkMicro} 
                onChange={(e) => this.props.onMicroChange(e.target.checked)}
                />Micro 
                <Checkbox 
                checked={this.props.check.checkMini} 
                onChange={(e) => this.props.onMiniChange(e.target.checked)}
                />Mini
                <Checkbox 
                checked={this.props.check.checkPrime}
                onChange={(e) => this.props.onPrimeChange(e.target.checked)}
                />Prime
                <br /><hr />
                <h4>By Price: </h4>
                <Checkbox 
                checked={this.props.check.below100} 
                onChange={(e) => this.props.onbelow100Change(e.target.checked)}
                />below 100
                <Checkbox 
                checked={this.props.check.below200} 
                onChange={(e) => this.props.onbelow200Change(e.target.checked)}
                />below 200
                <Checkbox 
                checked={this.props.check.above200} 
                onChange={(e) => this.props.onabove200Change(e.target.checked)}
                />above 200
                <br /> <hr />
                <h4>By Features: </h4>
                <Checkbox 
                checked={this.props.check.AC} 
                onChange={(e) => this.props.onACChange(e.target.checked)}
                /> AC CAB
                <Checkbox 
                checked={this.props.check.cashless} 
                onChange={(e) => this.props.onCashlessChange(e.target.checked)}
                /> Cashless
                <Checkbox 
                checked={this.props.check.wifi} 
                onChange={(e) => this.props.onWifiChange(e.target.checked)}
                />FREE WIFI
                <Checkbox 
                checked={this.props.check.e_seats} 
                onChange={(e) => this.props.onSeatChange(e.target.checked)}
                />EXTRA SEATS
                <Checkbox 
                checked={this.props.check.e_luggage} 
                onChange={(e) => this.props.onLuggageChange(e.target.checked)}
                />EXTRA LUGGAGE
            
            </div>
        );
    }
}

export default Filterbar;