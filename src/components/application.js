import React from "react";
import Input from "./input";
import Calculator from "./calculator";
import KeyboardEventHandler from "react-keyboard-event-handler";
class Application extends React.Component {
  state = {
    results: ""
  };

  handleOnKeyPress = e => {
    alert(`${e.key}`);
  };

  onClick = button => {
    if (button === "shift+=") {
      button = "+";
    } else if (button === "shift+5") {
      button = "%";
    } else if (button === "shift+8") {
      button = "*";
    }
    if (button === "=" || button === "enter") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE" || button === "backspace") {
      this.backspace();
    } else {
      this.setState({
        results: this.state.results + button
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        results: (eval(this.state.results) || "") + ""
      });
    } catch (e) {
      this.setState({
        results: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      results: ""
    });
  };

  backspace = () => {
    this.setState({
      results: this.state.results.slice(0, -1)
    });
  };

  render() {
    return (
      <div>
        <h1>SIMPLE CALCULATOR</h1>
        <KeyboardEventHandler
          handleKeys={[
            "numeric",
            "enter",
            "backspace",
            "/",
            "*",
            "-",
            "+",
            ".",
            "=",
            "shift+5",
            "shift+8",
            "shift+="
          ]}
          onKeyEvent={(key, e) => {
            this.onClick(key);
          }}
        />
        <Input results={this.state.results} />
        <Calculator onClick={this.onClick} />
      </div>
    );
  }
}

export default Application;
