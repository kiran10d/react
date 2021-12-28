import React, { Component } from "react";
import { connect } from "react-redux";
// import styled from "styled-components";

const containerStyle = {
  display: "flex",
};
const buttonStyle = {
  fontSize: "1.5rem",
  width: "40px",
  height: "40px",
};

class Counter extends Component {
  addOne = () => {
    this.props.dispatch({ type: "ADD_ONE" });
  };

  minusOne = () => {
    this.props.dispatch({ type: "MINUS_ONE" });
  };
    
  reset = () => {
    this.props.dispatch({ type: "RESET" });
  };

  render() {
    console.log("----UI----");
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.props.number}</h1>
          <div style={containerStyle}>
            <button onClick={this.minusOne} type="button" style={buttonStyle}>
              -
            </button>
            <button onClick={this.addOne} type="button" style={buttonStyle}>
              +
            </button>
            <button onClick={this.reset} type="button">
              Reset
            </button>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.reducersCount.number,
  };
};

export default connect(mapStateToProps)(Counter);
