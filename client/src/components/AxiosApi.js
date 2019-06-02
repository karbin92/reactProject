import React, { Component } from 'react';
import axios from 'axios';

class AxiosImages extends Component {

    constructor(props) {
        super(props);
        this.state = {
          imageURL: '',
        }
      }
      componentDidMount() {
        axios.get('https://dog.ceo/api/breeds/image/random')  /* Ett Axios API på hundar */
        .then(response => {
          this.setState({ imageURL: response.data.message });
        })
        .catch(error => {
          console.log(error);
        });
      }
      render() {
          
        const { imageURL } = this.state;
        return (
            
            <div className="center">
                <center><h2>API med Axios</h2></center>
          <img src={imageURL} alt="hundar" />
          <br></br>
          <a href="/AxiosApi">Ny hund</a>
          </div>
          
        );
      }
  }

export default AxiosImages