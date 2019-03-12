import React from 'react';
import './UserInput.css';

const userInput = (props) => {

  return (
    <div className="centered">
      <input 
        type="text"
        className="centered"
        onChange={props.usernameChange}
        value={props.username}
      />
    </div>
  )
}

export default userInput;