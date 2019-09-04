import React from "react";

class Calculator extends React.Component {
  render() {
    return (
      <div name="button">
        <button
          className="grey"
          name="C"
          onClick={e => this.props.onClick(e.target.name)}
        >
          C
        </button>
        <button
          className="grey"
          name="CE"
          onClick={e => this.props.onClick(e.target.name)}
        >
          CE
        </button>
        <button
          className="grey"
          name="%"
          onClick={e => this.props.onClick(e.target.name)}
        >
          %
        </button>
        <button
          className="orange"
          name="/"
          onClick={e => this.props.onClick(e.target.name)}
        >
          /
        </button>
        <br />
        <button
          className="dark"
          name="7"
          onClick={e => this.props.onClick(e.target.name)}
        >
          7
        </button>
        <button
          className="dark"
          name="8"
          onClick={e => this.props.onClick(e.target.name)}
        >
          8
        </button>
        <button
          className="dark"
          name="9"
          onClick={e => this.props.onClick(e.target.name)}
        >
          9
        </button>
        <button
          className="orange"
          name="*"
          onClick={e => this.props.onClick(e.target.name)}
        >
          *
        </button>
        <br />
        <button
          className="dark"
          name="4"
          onClick={e => this.props.onClick(e.target.name)}
        >
          4
        </button>
        <button
          className="dark"
          name="5"
          onClick={e => this.props.onClick(e.target.name)}
        >
          5
        </button>
        <button
          className="dark"
          name="6"
          onClick={e => this.props.onClick(e.target.name)}
        >
          6
        </button>
        <button
          className="orange"
          name="-"
          onClick={e => this.props.onClick(e.target.name)}
        >
          -
        </button>
        <br />
        <button
          className="dark"
          name="1"
          onClick={e => this.props.onClick(e.target.name)}
        >
          1
        </button>
        <button
          className="dark"
          name="2"
          onClick={e => this.props.onClick(e.target.name)}
        >
          2
        </button>
        <button
          className="dark"
          name="3"
          onClick={e => this.props.onClick(e.target.name)}
        >
          3
        </button>
        <button
          className="orange"
          name="+"
          onClick={e => this.props.onClick(e.target.name)}
        >
          +
        </button>
        <br />
        <button
          className="zero"
          name="0"
          onClick={e => this.props.onClick(e.target.name)}
        >
          0
        </button>
        <button
          className="dark"
          name="."
          onClick={e => this.props.onClick(e.target.name)}
        >
          .
        </button>
        <button
          className="orange"
          name="="
          onClick={e => this.props.onClick(e.target.name)}
        >
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
