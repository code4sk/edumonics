import React from 'react';

class LeftPanel extends React.Component {


    

    homeOnClickListener = (e) => {
        e.preventDefault();
        
    this.props.changeRightPanel(0);
  };
  downloadOnClickListener = (e) => {
      e.preventDefault();
      
    this.props.changeRightPanel(1);
  };
  practiceOnClickListener = (e) => {
      e.preventDefault();
      
    this.props.changeRightPanel(3);
  };
  questionOnClickListener = (e) => {
      e.preventDefault();
      
    this.props.changeRightPanel(4);
  };
  sessionOnClickListener = (e) => {
    e.preventDefault();
    this.props.changeRightPanel(2);
    };

    
    


    render() {
       
        
    return (
      <div className="left-panel-1">
        
        <a href="$" onClick={this.homeOnClickListener}>
          Home
        </a>
        <a href="$" onClick={this.sessionOnClickListener}>
          Session
        </a>
        <a href="$" onClick={this.downloadOnClickListener}>
          Downloads
        </a>
        <a href="$" onClick={this.practiceOnClickListener}>
          Practice Questions
        </a>
        <a href="$" onClick={this.questionOnClickListener}>
          Ask Questions
        </a>
      </div>
    );
  }
}

export default LeftPanel;
