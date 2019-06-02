import React, { Component } from 'react';
import Message from './Message';

class App extends Component {

  state = {
    Message: []
  }

  componentDidMount() {
    fetch('http://193.10.202.82/MessageRestApi/Message')
    .then(res => res.json())
    .then((data) => {
      this.setState({ Message: data })
    })
    .catch(console.log)
  }
  render() {
    return (
      <Message Message={this.state.Message} />
    )
  }
}

export default App