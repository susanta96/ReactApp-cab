import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import CabShowcase from './containers/CabShowcase/CabShowcase';
import ContactPage from './containers/ContactPage/ContactPage';
class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/contact" component ={ContactPage} />
            <Route path="/" component ={CabShowcase} />
          </Switch>
        </Layout>
      </div>
    );
  }
}


export default App;
