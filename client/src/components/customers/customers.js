import React, { Component } from 'react'
import './customers.css';

class Customers extends Component {
    constructor(){
        super();
        this.state={
            customers:[]
        }
    }
    componentDidMount() {
        fetch('/api/customers')
        .then(res=>res.json())
        .then(customers=> this.setState({customers}, ()=> console.log('Customers fetched..',
        customers)));
    }
    
    render() {
        return (
            <div className="center3">
     <center><h2>Egen API med JS Express</h2></center>
     <br></br>
     <center> <ul>
            {this.state.customers.map(customer=>
                <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
                )}
      </ul></center>
    </div>
  );
        
}
}


export default Customers;
