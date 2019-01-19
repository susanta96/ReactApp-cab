import React, { Component } from 'react';
import Aux from '../../hoc/Auxx/Auxx';
import Cabdiv from '../../components/CabDiv/Cabdiv';
import FilterBar from '../FilterBar/FilterBar';
import axios from 'axios';

export default class CabShowcase extends Component {
  state = {
      cabinfo: [],
      error: false
  };

  componentDidMount() {
    axios.get('/cabs')
        .then(res => {
            this.setState({cabinfo: res.data});
            // console.log(res.data);
        })
        .catch(err => {
            this.setState({error: true});
            // console.log(err);
        });
  }
  


  render() {

    return (
      <Aux>
        <FilterBar />
        {this.state.error === false ? this.state.cabinfo.map(el => <Cabdiv key={el.cid} cabinfo={el} />) : <p style={{textAlign: 'center',color:'red'}}>Cabs Details couldn't find...!</p>}
      </Aux>
    );
  }
}
