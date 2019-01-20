import React, { Component } from 'react';
import Aux from '../../hoc/Auxx/Auxx';
import Cabdiv from '../../components/CabDiv/Cabdiv';
import classes from './CabShowcase.module.css';
import FilterBar from '../FilterBar/FilterBar';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';

export default class CabShowcase extends Component {
  state = {
      cabinfo: null,
      error: false,
      loading: false
  };

  componentDidMount() {
    // console.log(this.props);
    this.setState({loading: true});
    axios.get('/cabs')
        .then(res => {
            this.setState({cabinfo: res.data, loading: false});
            // console.log(res.data);

        })
        .catch(err => {
            this.setState({error: true});
            // console.log(err);
        });
  }
  
  handleBook = (cid) => {
    const queryParams =[];
    queryParams.push('cab_id=' + cid);
  

    this.props.history.push({
      pathname: '/contact',
      search: '?' + queryParams
    });
  }
  


  render() {
    let  CabShow = <Spinner />;
    if(this.state.cabinfo) {
      CabShow = this.state.cabinfo.map(el => <Cabdiv key={el.cid} cabinfo={el} bookingHandler={() => this.handleBook(el.cid)}/>);
    }
    return (
      <Aux>
        <FilterBar />
        {this.state.error === false ? CabShow : <p className={classes.Err}>Cabs Details couldn't find...!</p>}

      </Aux>
    );
  }
}
