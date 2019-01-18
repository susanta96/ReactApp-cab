import React, { Component } from 'react';
import Aux from '../../hoc/Auxx/Auxx';
import Cabdiv from '../../components/CabDiv/Cabdiv';

export default class CabShowcase extends Component {
  render() {
    return (
      <Aux>
        <div>Filter SideBar </div>
        <Cabdiv />
      </Aux>
    );
  }
}
