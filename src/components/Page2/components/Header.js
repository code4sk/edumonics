import React from 'react';
import {Link} from 'react-router-dom'

class Header extends React.Component {
  logoutStyle = {
    display: "none",
  };
  showBtnStyle = {
    display: "none",
  };
  showMenuStyle = {
    display: "none",
    width: "70px",
  };
  showMenu1Style = {
    display: "none",
    width: "120px",
  };
  showMenu11Style = {
    display: "none",
    width: "120px",
  };
  showMenu12Style = {
    display: "none",
    width: "120px",
  };
  showMenu2Style = {
    display: "none",
    width: "120px",
  };
  showMenu21Style = {
    display: "none",
    width: "120px",
  };
  showMenu22Style = {
    display: "none",
    width: "120px",
  };

  state = {
    show: false,
    showBtn: false,
    showMenu: false,
    showMenu1: false,
    showMenu2: false,
    showMenu11: false,
    showMenu12: false,
    showMenu21: false,
    showMenu22: false,
  };

  onAccountListener = (e) => {
    e.preventDefault();
    this.setState((prevState, props) => {
      this.setState({
        show: !prevState.show,
      });
    });
  };

  selectBtnOnClickListener = (e) => {
    e.preventDefault();
    this.setState((prevState, props) => {
      this.setState({
        showMenu: !prevState.showMenu,
        showMenu1: false,
        showMenu2: false,
      });
    });
  };
  TenthOnClickListener = (e) => {
    e.preventDefault();
    this.setState((prevState, props) => {
      this.setState({ showMenu1: !prevState.showMenu1, showMenu2: false });
    });
  };
  EnglishOnClickListener = (e) => {
    e.preventDefault();
    this.setState((prevState, props) => {
      this.setState({
        showMenu11: !prevState.showMenu11,
        showMenu2: false,
        showMenu12: false,
      });
    });
  };
  MathOnClickListener = (e) => {
    e.preventDefault();
    this.setState((prevState, props) => {
      this.setState({
        showMenu12: !prevState.showMenu12,
        showMenu2: false,
        showMenu11: false,
      });
    });
  };
  TwelvethOnClickListener = (e) => {
    e.preventDefault();
    this.setState((prevState, props) => {
      this.setState({ showMenu2: !prevState.showMenu2, showMenu1: false });
    });
  };

  PhysicsOnClickListener = (e) => {
    e.preventDefault();
    this.setState((prevState, props) => {
      this.setState({
        showMenu21: !prevState.showMenu21,
        showMenu1: false,
        showMenu22: false,
      });
    });
  };
  ChemestryOnClickListener = (e) => {
    e.preventDefault();
    this.setState((prevState, props) => {
      this.setState({
        showMenu22: !prevState.showMenu22,
        showMenu1: false,
        showMenu21: false,
      });
    });
  };
  FinalOnClickListener = (e) => {
    e.preventDefault();
    this.setState((prevState, props) => {
      this.setState({
        show: false,
        showMenu: false,
        showMenu1: false,
        showMenu2: false,
        showMenu11: false,
        showMenu12: false,
        showMenu21: false,
        showMenu22: false,
      });
    });
  };

  render() {
    if (this.props.status !== 2) {
      this.showBtnStyle = { display: "none" };
    } else {
      this.showBtnStyle = { display: "inline-block" };
    }
    if (this.state.show === false) {
      this.logoutStyle = { display: "none" };
    } else {
      this.logoutStyle = { display: "inline-block" };
    }
    if (this.state.showMenu === false) {
      this.showMenuStyle = { display: "none" };
    } else {
      this.showMenuStyle = {
        display: "block",
        transform: "translate(0, -23%)",
      };
    }
    if (this.state.showMenu1 === false) {
      this.showMenu1Style = {
        display: "none",
        width: "130px",
        transform: "translateX(-20%)",
      };
    } else {
      this.showMenu1Style = {
        display: "block",
        width: "130px",
        transform: "translate(+29%, -70%)",
      };
    }
    if (this.state.showMenu2 === false) {
      this.showMenu2Style = {
        display: "none",
        width: "130px",
        transform: "translateX(-20%)",
      };
    } else {
      this.showMenu2Style = {
        display: "block",
        width: "130px",
        transform: "translate(+29%, -70%)",
      };
    }
    if (this.state.showMenu11 === false) {
      this.showMenu11Style = {
        display: "none",
        width: "130px",
        transform: "translateX(-20%)",
      };
    } else {
      this.showMenu11Style = {
        display: "block",
        width: "180px",
        transform: "translate(+55%, -29%)",
      };
    }
    if (this.state.showMenu12 === false) {
      this.showMenu12Style = {
        display: "none",
        width: "130px",
        transform: "translateX(-20%)",
      };
    } else {
      this.showMenu12Style = {
        display: "block",
        width: "180px",
        transform: "translate(+55%, -29%)",
      };
    }

    if (this.state.showMenu21 === false) {
      this.showMenu21Style = {
        display: "none",
        width: "130px",
        transform: "translateX(-20%)",
      };
    } else {
      this.showMenu21Style = {
        display: "block",
        width: "180px",
        transform: "translate(+55%, -31%)",
      };
    }
    if (this.state.showMenu22 === false) {
      this.showMenu22Style = {
        display: "none",
        width: "130px",
        transform: "translateX(-20%)",
      };
    } else {
      this.showMenu22Style = {
        display: "block",
        width: "180px",
        transform: "translate(+55%, -27%)",
      };
    }

    return (
      <div className="header-2">
        <div className="navbar">
          <span>Welcome to edunomics</span>
          <div className="select-class-menu">
            <a
              href="$"
              onClick={this.selectBtnOnClickListener}
              className="select-class other" style={this.showBtnStyle}
            >
              Select class
            </a>
            <ul style={this.showMenuStyle}>
              <a href="$" onClick={this.TenthOnClickListener}>
                <li>10th</li>
              </a>
              <ul style={this.showMenu1Style}>
                <a href="$" onClick={this.EnglishOnClickListener}>
                  <li>English</li>
                </a>
                <ul style={this.showMenu11Style}>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>The Red Wheelbarrow</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>The Waste Land</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>We Real Cool</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>One Art</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Harlen</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Middle Passage</li>
                  </a>
                </ul>

                <a href="$" onClick={this.MathOnClickListener}>
                  <li>Mathematics</li>
                </a>
                <ul style={this.showMenu12Style}>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Sets</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Number Theory</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Calculas</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Algebra</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Matrix</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Probability</li>
                  </a>
                </ul>
              </ul>

              <a href="$" onClick={this.TwelvethOnClickListener}>
                <li>12th</li>
              </a>
              <ul style={this.showMenu2Style}>
                <a href="$" onClick={this.PhysicsOnClickListener}>
                  <li>Physics</li>
                </a>
                <ul style={this.showMenu21Style}>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Kinematics</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Gravitational force</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Linear Motion</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Circular Motion</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>SHM</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Mechanics</li>
                  </a>
                </ul>
                <a href="$" onClick={this.ChemestryOnClickListener}>
                  <li>Chemestry</li>
                </a>
                <ul style={this.showMenu22Style}>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Solid States</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Halogens</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Equilibrium</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Periodic Table</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Organic Chemestry</li>
                  </a>
                  <a href="$" onClick={this.FinalOnClickListener}>
                    <li>Inorganic Chemestry</li>
                  </a>
                </ul>
              </ul>
            </ul>
          </div>
          <div className="my-account-nav">
            <a href="$" className="other" onClick={this.onAccountListener}>
              My Account
            </a>
            <Link style={this.logoutStyle} className="submenu" to="/">
              Logout
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
