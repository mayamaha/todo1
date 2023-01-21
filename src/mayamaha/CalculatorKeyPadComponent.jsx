import React, { Component } from "react";

class CalculatorKeyPadComponent extends Component {
  render() {
    return (
      <div className="button">
        <button
          name="("
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "red", fontWeight: "bold" }}
        >
          (
        </button>
        <button
          name="CE"
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "rgb(46, 168, 86)", fontWeight: "bold" }}
        >
          CE
        </button>
        <button
          name=")"
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "red", fontWeight: "bold" }}
        >
          )
        </button>
        <button
          name="C"
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "rgb(4, 23, 132)", fontWeight: "bold" }}
        >
          C
        </button>
        <br />

        <button
          name="1"
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "rgb(195, 33, 117)", fontWeight: "bold" }}
        >
          1
        </button>
        <button
          name="2"
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "rgb(195, 33, 117)", fontWeight: "bold" }}
        >
          2
        </button>
        <button
          name="3"
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "rgb(186, 40, 169)", fontWeight: "bold" }}
        >
          3
        </button>
        <button
          name="+"
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "rgb(139, 246, 8)", fontWeight: "bold" }}
        >
          +
        </button>
        <br />

        <button
          name="4"
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "rgb(246, 190, 8)", fontWeight: "bold" }}
        >
          4
        </button>
        <button
          name="5"
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "rgb(16, 245, 180)", fontWeight: "bold" }}
        >
          5
        </button>
        <button
          name="6"
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "rgb(50, 202, 236)", fontWeight: "bold" }}
        >
          6
        </button>
        <button
          name="-"
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "rgb(196, 76, 232)", fontWeight: "bold" }}
        >
          -
        </button>
        <br />

        <button
          name="7"
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "rgb(250, 6, 116)", fontWeight: "bold" }}
        >
          7
        </button>
        <button
          name="8"
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "purple", fontWeight: "bold" }}
        >
          8
        </button>
        <button
          name="9"
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "orange", fontWeight: "bold" }}
        >
          9
        </button>
        <button
          name="*"
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "yellowgreen", fontWeight: "bold" }}
        >
          x
        </button>
        <br />

        <button
          name="."
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "black", fontWeight: "bold" }}
        >
          .
        </button>
        <button
          name="0"
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "yellow", fontWeight: "bold" }}
        >
          0
        </button>
        <button
          name="="
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "blue", fontWeight: "bold" }}
        >
          =
        </button>
        <button
          name="/"
          onClick={(e) => this.props.onClick(e.target.name)}
          style={{ color: "green", fontWeight: "bold" }}
        >
          ÷
        </button>
        <br />
      </div>
    );
  }
}

export default CalculatorKeyPadComponent;
