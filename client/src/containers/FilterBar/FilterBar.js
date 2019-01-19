import React, { Component } from 'react';
import classes from './FilterBar.module.css';
import Checkbox from '@material-ui/core/Checkbox';

class Filterbar extends Component {
    state= {
        checkMicro: true,
        checkMini: true,
        checkPrime: true,
        below100: false,
        below200: false,
        above200: false,
        AC: false,
        cashless: false,
        wifi: false,
        e_seats: false
    }

    handleChange = name => event => {
        this.setState({ [name] : event.target.checked});
    };

    render() {
        return (
            <div className={classes.FilterBox}>
                <h2>Filter Bar</h2><hr />
                <h4>By Category:</h4>
                <Checkbox
                checked={this.state.checkMicro} 
                onChange={this.handleChange('checkMicro')}
                value="checkMicro"/>Micro 
                <Checkbox 
                checked={this.state.checkMini} 
                onChange={this.handleChange('checkMini')}
                value="checkMini"/>Mini
                <Checkbox 
                checked={this.state.checkPrime} 
                onChange={this.handleChange('checkPrime')}
                value="checkPrime"/>Prime
                <br /><hr />
                <h4>By Price: </h4>
                <Checkbox 
                checked={this.state.below100} 
                onChange={this.handleChange('below100')}
                value="below100"/>below 100
                <Checkbox 
                checked={this.state.below200} 
                onChange={this.handleChange('below200')}
                value="above100"/>below 200
                <Checkbox 
                checked={this.state.above200} 
                onChange={this.handleChange('above200')}
                value="above200"/>above 200
                <br /> <hr />
                <h4>By Features: </h4>
                <Checkbox 
                checked={this.state.AC} 
                onChange={this.handleChange('AC')}
                value="AC"/> AC CAB
                <Checkbox 
                checked={this.state.cashless} 
                onChange={this.handleChange('cashless')}
                value="cashless"/> Cashless
                <Checkbox 
                checked={this.state.wifi} 
                onChange={this.handleChange('wifi')}
                value="wifi"/>FREE WIFI
                <Checkbox 
                checked={this.state.e_seats} 
                onChange={this.handleChange('e_seats')}
                value="e_seats"/>EXTRA SEATS
            
            </div>
        );
    }
}

export default Filterbar;