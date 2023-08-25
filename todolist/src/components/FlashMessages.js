import React, { Component } from "react";

export class FlashMessages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      isVisible: false,
    };
  }

  messagePop = (content) => {
    this.setState({
      message: content,
      isVisible: true,
    });
    setTimeout(() => {
      this.setState({
        isVisible: false,
        message: '',
      });
    }, 500);
  };
  render() {
    return (
      <div>
        <div className={`message-pop ${this.state.isVisible ? "visible" : ""}`}>
          {this.state.message}
        </div>

        <p>
            <button onClick={this.messagePop('Hello')}>Click</button>
        </p>
      </div>
    );
  }
}

export default FlashMessages;
