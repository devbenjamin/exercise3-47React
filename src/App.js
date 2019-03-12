import React, { Component } from 'react';
import './App.css';
// import UserOutput from '../UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'bdavis',
  }

  usernameEventHandler = (event) => {
    this.setState({
      username: event.target.value
    })
    console.log(this.state.username)
  }

  render() {


    return (
      <div>
        <UserOutput 
          username= {this.state.username}>
        </UserOutput>
        <UserOutput 
          username= {this.state.username}>
        </UserOutput>
        <UserOutput 
          username= {this.state.username}>
        </UserOutput>
        <UserInput
          usernameChange= {this.usernameEventHandler}
          username= {this.state.username}>
        </UserInput>
      </div>
    );
  }
}

export default App;
