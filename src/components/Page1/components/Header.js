import React from 'react';
import { Link } from 'react-router-dom';
// import HeadImage from "./header-image";


class Header extends React.Component{

  state = {
    showLogin: false,
  }
  
  loginOnClickListener = (e) => {
    e.preventDefault();
    
    this.setState((prevState, props) => {
      this.setState({
        showLogin: !prevState.showLogin
      })
    })
  }

  render() {
    let loginJSX = null;
    if (this.state.showLogin) {
      loginJSX = (
        <div className="login-form">
          <label htmlFor="email">Email id/Phone Number</label>
          <br></br>
          <input id="email" />
          <br></br>
          <label htmlFor="password">Password</label>
          <br></br>
          <input id="password" />
          <br></br>
          <Link to="/home">Login</Link>
        </div>
      );
    }

    
    
        return (
          <div className="header-1">
            <div className="navbar">
              <span>Welcome to edunomics</span>
              <div className="nav-items">
                <a href="$" onClick={this.loginOnClickListener} >Login</a>
                <Link to="/signup/">Sign up</Link>
              </div>
            </div>
            {loginJSX}
            <div className="main-header">
              <h1 className="large-header">Where do you want to go today?</h1>
              <span className="small-header">
                Share your ultimate travel bucket list with us
              </span>
            </div>
          </div>
        );
    }
}

export default Header;
