import React from "react";
import { Link } from 'react-router-dom'
import StudyImage from './study.jpg'

import "./sign_up_page.css";

class SignUpPage extends React.Component {
  render() {
    return (
      <div className="signup-page">
        <img src={StudyImage} alt="Not visible"></img>
        <div className="signup-form">
          <h2>Sign Up</h2>
          <label htmlFor="name">Name</label>
          <br></br>
          <input id="name" />
          <br></br>
          <label htmlFor="email">Email id</label>
          <br></br>
          <input id="email" />
          <br></br>
          <label htmlFor="password">Password</label>
          <br></br>
          <input id="password" />
          <br></br>
          <label htmlFor="mobile">Mobile number</label>
          <br></br>
          <input id="mobile" />
          <br></br>
          <Link to="/">Sign Up</Link>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
