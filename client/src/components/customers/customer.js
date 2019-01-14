import React, { Component } from 'react';
import './customers.css';


class Customers extends Component {
    state = {
        customers: []
      }
    
    componentDidMount() {
        fetch('/api/customers')
          .then(res => res.json())
          .then(customers => this.setState({customers}, () => console.log('Cutomers Fetched..',customers)));
      }
    
  render() {
    return (
        <div>
            <h1>Customer Details</h1>
            <ul>
                {this.state.customers.map(customer =>
                    <li key={customer.id}>{customer.firstName} {customer.lastName}</li>    
                )}
            </ul>
        </div>
    );
  }
}

export default Customers;
