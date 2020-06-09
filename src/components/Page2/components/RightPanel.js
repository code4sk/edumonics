import React from 'react';
import SomeText from "./SomeText";
import SessionImage from './session.png'
import DownloadImage from "./download.png";
import QuestionImage from "./questions.png";
import PracticeImage from "./practice.png";

class RightPanel extends React.Component {
  sessionOnClickListener = () => {
    this.props.changeRightPanel(2);
  };
  downloadOnClickListener = () => {
    this.props.changeRightPanel(1);
  };
  practiceOnClickListener = () => {
    this.props.changeRightPanel(3);
  };
  questionOnClickListener = () => {
    this.props.changeRightPanel(4);
  };

  render() {
    let right = null;
    if (this.props.status === 0) {
      right = (
        <div className="top">
          <div className="widget" onClick={this.sessionOnClickListener}>
            <img alt="Not available" src={SessionImage}></img>
            <span>All interactive sessions</span>
          </div>
          <div className="widget" onClick={this.practiceOnClickListener}>
            <img alt="Not available" src={PracticeImage}></img>
            <span>Practice Questions</span>
          </div>
          <div className="widget" onClick={this.downloadOnClickListener}>
            <img alt="Not available" src={DownloadImage}></img>
            <span>Downloads</span>
          </div>
          <div className="widget" onClick={this.questionOnClickListener}>
            <img alt="Not available" src={QuestionImage}></img>
            <span>Ask Questions</span>
          </div>
        </div>
      );
    } else if (this.props.status === 1) {
      right = <SomeText text="Your downloaded files." />;
    } else if (this.props.status === 2) {
      right = <SomeText text="Starting an interactive session." />;
    } else if (this.props.status === 3) {
      right = <SomeText text="You can practice questions here." />;
    } else {
      right = <SomeText text="Ask your questions." />;
    }
    return (
      <div className="right-panel-1">
        {right}
        <div className="bottom">
          <div className="bottom-top-box">
            <div className="card">
              <span className="title">Topic Covered</span>
              <span className="text"></span>
            </div>
            <div className="card">
              <span className="title">Recent Activities</span>
              <span className="text"></span>
            </div>
          </div>
          <div className="bottom-bottom">
            <div className="card abnormal-card">
              <span className="title abnormal-title">Performance</span>
              <span className="text"></span>
            </div>
          </div>
        </div>
        <div className="page2-foot-note">
          <span className="name">EDUNOMICS</span>
          <span className="addr">contact@edunomics.in</span>
        </div>
      </div>
    );
  }
}

export default RightPanel;
