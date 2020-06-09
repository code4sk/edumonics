import React from "react";

class SomeText extends React.Component {
  render() {
    return (
      <div className="some-text">
            <span>{this.props.text}</span>
      </div>
    );
  }
}

export default SomeText;
