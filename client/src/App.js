import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import CabShowcase from './containers/CabShowcase/CabShowcase';
import ContactPage from './containers/ContactPage/ContactPage';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


//apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql'
})


class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Layout>
            <Switch>
              <Route path="/contact" component ={ContactPage} />
              <Route path="/" component ={CabShowcase} />
            </Switch>
          </Layout>
        </div>
      </ApolloProvider>
    );
  }
}


export default App;
