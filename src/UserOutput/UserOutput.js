import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {

  const styling = {
    textAlign: 'center'
  }

  return (
    <div className="cards">
      <p style= {styling}>Username: {props.username}</p>      
    </div>
  )
}

export default userOutput;

  // let display = "";

  // if (!props.para1) {
  //   display = props.username
  // } else {
  //   display = props.para1
  // }