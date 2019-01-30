import React, { Component } from 'react';
import Aux from '../../hoc/Auxx/Auxx';
import Cabdiv from '../../components/CabDiv/Cabdiv';
import classes from './CabShowcase.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import FilterBar from '../FilterBar/FilterBar';
// import axios from 'axios';
import { graphql } from 'react-apollo';
import { getCabsQuery } from '../../queries/queries';


class CabShowcase extends Component {
  state = {
      // cabinfo: null,
      // loading: false
      error: false,
      checkMicro: false,
      checkMini: false,
      checkPrime: false,
      below100: false,
      below200: false,
      above200: false,
      AC: false,
      cashless: false,
      wifi: false,
      e_seats: false,
      e_luggage: false
  };

  // componentDidMount() {
    // console.log(this.props);
    // this.setState({loading: true});
    // axios.get('/cabs')
    //     .then(res => {
    //         this.setState({cabinfo: res.data, loading: false});
    //         // console.log(res.data);

    //     })
    //     .catch(err => {
    //         this.setState({error: true});
    //         // console.log(err);
    //     });

  // }
  
  handleBook = (cid) => {
    const queryParams =[];
    queryParams.push('cab_id=' + cid);
  

    this.props.history.push({
      pathname: '/contact',
      search: '?' + queryParams
    });
  }

  handleMicroChange = () => {
    this.setState({checkMicro: !this.state.checkMicro})
  }

  handleMiniChange = () => {
    
      this.setState({checkMini: !this.state.checkMini})
  }
  handlePrimeChange = () => {
    this.setState({checkPrime: !this.state.checkPrime})
  }
  handleBelow100Change = () => {
    this.setState({below100: !this.state.below100})
  }
  handleBelow200Change = () => {
    this.setState({below200: !this.state.below200})
  }
  handleAbove200Change = () => {
    this.setState({above200: !this.state.above200})
  }
  handleACChange = () => {
    this.setState({AC: !this.state.AC})
  }
  handleWifiChange = () => {
    this.setState({wifi: !this.state.wifi})
  }
  handleCashlessChange = () => {
    this.setState({cashless: !this.state.cashless})
  }
  handleSeatChange = () => {
    this.setState({e_seats: !this.state.e_seats})
  }
  handleLuggageChange = () => {
    this.setState({e_luggage: !this.state.e_luggage})
  }


  render() {
    let CabShow = null;
    let data = this.props.data;
    if(data.loading){
      CabShow = <Spinner />;
    }else{
      if(this.state.checkMicro){
        CabShow = data.cabs.map(cab => (
          cab.type === 'Micro' ? <Cabdiv key={cab.cid} cabinfo={cab} bookingHandler={() => this.handleBook(cab.cid)}/> : null
          ))
        }
      else if(this.state.checkMini){
        CabShow = data.cabs.map(cab => (
          cab.type === 'Mini' ? <Cabdiv key={cab.cid} cabinfo={cab} bookingHandler={() => this.handleBook(cab.cid)}/> : null
          ))
        }
      else if(this.state.checkPrime){
        CabShow = data.cabs.map(cab => (
          cab.type === 'Prime' ? <Cabdiv key={cab.cid} cabinfo={cab} bookingHandler={() => this.handleBook(cab.cid)}/> : null
          ))
        }
      else if(this.state.below100){
        CabShow = data.cabs.map(cab => (
          cab.rate <= 100 ? <Cabdiv key={cab.cid} cabinfo={cab} bookingHandler={() => this.handleBook(cab.cid)}/> : null
          ))
        }
      else if(this.state.below200){
        CabShow = data.cabs.map(cab => (
          cab.rate >100 && cab.rate <= 200 ? <Cabdiv key={cab.cid} cabinfo={cab} bookingHandler={() => this.handleBook(cab.cid)}/> : null
          ))
        }
      else if(this.state.above200){
        CabShow = data.cabs.map(cab => (
          cab.rate > 200 ? <Cabdiv key={cab.cid} cabinfo={cab} bookingHandler={() => this.handleBook(cab.cid)}/> : null
          ))
        }
      else if(this.state.AC){
        CabShow = data.cabs.map(cab => (
          cab.AC === 1 ? <Cabdiv key={cab.cid} cabinfo={cab} bookingHandler={() => this.handleBook(cab.cid)}/> : null
          ))
        }
      else if(this.state.wifi){
        CabShow = data.cabs.map(cab => (
          cab.wifi === 1 ? <Cabdiv key={cab.cid} cabinfo={cab} bookingHandler={() => this.handleBook(cab.cid)}/> : null
          ))
        }
      else if(this.state.cashless){
        CabShow = data.cabs.map(cab => (
          cab.cashless === 1 ? <Cabdiv key={cab.cid} cabinfo={cab} bookingHandler={() => this.handleBook(cab.cid)}/> : null
          ))
        }
      else if(this.state.e_seats){
        CabShow = data.cabs.map(cab => (
          cab.e_seats === 1 ? <Cabdiv key={cab.cid} cabinfo={cab} bookingHandler={() => this.handleBook(cab.cid)}/> : null
          ))
        }
      else if(this.state.e_luggage){
        CabShow = data.cabs.map(cab => (
          cab.e_luggage === 1 ? <Cabdiv key={cab.cid} cabinfo={cab} bookingHandler={() => this.handleBook(cab.cid)}/> : null
          ))
        }
      else{
        CabShow = data.cabs.map(el => <Cabdiv key={el.cid} cabinfo={el} bookingHandler={() => this.handleBook(el.cid)}/>);
      }
    }
    
    return (
      <Aux>
        <FilterBar check={this.state} 
        onMiniChange={this.handleMiniChange} 
        onMicroChange={this.handleMicroChange} 
        onPrimeChange={this.handlePrimeChange}
        onbelow100Change={this.handleBelow100Change} 
        onbelow200Change={this.handleBelow200Change} 
        onabove200Change={this.handleAbove200Change} 
        onACChange={this.handleACChange} 
        onWifiChange={this.handleWifiChange} 
        onCashlessChange={this.handleCashlessChange} 
        onSeatChange={this.handleSeatChange}
        onLuggageChange={this.handleLuggageChange} />
        {this.state.error === false ? CabShow : <p className={classes.Err}>Cabs Details couldn't find...!</p>}

      </Aux>
    );
  }
}

export default graphql(getCabsQuery)(CabShowcase);