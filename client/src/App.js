import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import CabShowcase from './containers/CabShowcase/CabShowcase';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <CabShowcase />
        </Layout>
        
      </div>
    );
  }
}


export default App;
