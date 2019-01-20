import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import classes from './ContactPage.module.css';
// import Aux from '../../hoc/Auxx/Auxx';
import axios from 'axios';
import Button from '../../components/UI/Buttons/Buttons';
import Spinner from '../../components/UI/Spinner/Spinner';




class Contactpage extends Component {
  state = {
    name: '',
    email: '',
    b_date: '',
    cab_id: '',
    loading : false
  };

  componentWillMount () {
    const query = new URLSearchParams( this.props.location.search );
    let cabno = 0;
    for ( let param of query.entries() ) {
      if(param[0] === 'cab_id'){
        cabno = param[1];
      }
    }
    this.setState( { cab_id: cabno } );
}

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  ConfirmBookinghandler =(event) => {
    event.preventDefault();
    this.setState({loading: true});
    // console.log(this.state.b_date);
    // console.log(this.state.name);
    // console.log(this.state.email);
    // console.log(this.state.cab_id);
    const bookingInfo = {
      uname: this.state.name,
      email: this.state.email,
      b_date: this.state.b_date,
      cab_id: this.state.cab_id
    }
    axios.post( '/booking', bookingInfo )
    .then( response => {
        this.setState( { loading: false } );
        this.props.history.push( '/' );
    } )
    .catch( error => {
        // this.setState( { loading: false } );
    } );


  }

  render() {

    let formShow = [
      <form key={this.state.cab_id} onSubmit={this.ConfirmBookinghandler}>
        <TextField
          required
          id="uname"
          label="Full Name"
          placeholder="Eg. Susanta Chakraborty"
          onChange={this.handleChange('name')}
          className={classes.textField}
          margin="normal"
        />
        <TextField
          required
          id="email"
          label="Email"
          type="email"
          placeholder="Eg. susanta96@icloud.com"
          onChange={this.handleChange('email')}
          className={classes.textField}
          margin="normal"
        /><br/><br/>
        <TextField
        id="date"
        label="Booking Date"
        type="date"
        onChange={this.handleChange('b_date')} 
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}/><br/><br />
        <Button btnType="Confirm"> Confirm</Button>
        
      </form>
      ];

    if(this.state.loading){
      formShow = <Spinner/>;
    }

    return (
      <div className={classes.Container}>
        {formShow}
      </div>
    );
  }
}

Contactpage.propTypes = {
  classes: PropTypes.object,
};

export default Contactpage;