import React, { Component } from 'react'
import './customers.css';
/* Nedan presenteras mitt egna API från servern i server.js-filen som körs tillsammans med projektet tack vare "run dev kommandot, servern på localhost 5000 och klienten på 3000, allt i samma projekt" Det är Express som gör detta möjligt. */
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
            <span className="center">
     <center><h2>Egen API med JS Express</h2></center>
     <br></br>
     <center> <ul>
            {this.state.customers.map(customer=>
                <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
                )}
      </ul></center>
    </span>
  );
        
}
}


export default Customers;
