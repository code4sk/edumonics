import React from "react";
import Header from "./components/Header";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

import './page_two.css'


class PageTwo extends React.Component {

  state = {
    status: 0
  }

  changeRightPanel = (val) => {
    console.log(val)
    this.setState({
      status: val
    })
  }
 
  render() {
    
    return (
      <div className="header-2">
        <Header status={this.state.status} />
        <div className="page2-layout">
          <LeftPanel changeRightPanel={this.changeRightPanel} />
          <RightPanel
            changeRightPanel={this.changeRightPanel}
            status={this.state.status}
          />
        </div>
      </div>
    );
  }
}

export default PageTwo;
