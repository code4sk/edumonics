import React from 'react';
import Fb from './fb.png'
import Insta from "./insta.png";
import Twit from "./twitter.png";
class Header extends React.Component {
    render() {
        return (
          <div className="footer-1">
            <span className="foot-large">EDUNOMICS</span>
            <span className="foot-small">contact@edunomics.in</span>
            <div className="foot-logo">
              <img src={Fb}></img>
              <img src={Insta}></img>
              <img src={Twit}></img>
            </div>
            <div className="foot-last">
              <span>Join Us |&nbsp;</span>
              <span>Cookie Policy |&nbsp;</span>
              <span>Term of use |&nbsp;</span>
              <span>Tech |&nbsp;</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        );
    }
}

export default Header;
