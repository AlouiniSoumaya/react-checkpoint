import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Main from "../main/main";

export default class extends Component {
  constructor(props) {
    super(props); //a apprendre
    this.state = {
      show: false,
    };
  }
  render() {
    const showReslt = () => {
      this.setState({
        showMeResult: !this.state.showMeResult,
        compte: this.state.compte + 1,
      });
    };
    return (
      <div>
        <Button
          variant={this.state.showMeResult ? "primary" : "danger"}
          onClick={() => showReslt()}
        >
          {this.state.showMeResult ? "hide Profile" : "show Profile"}
        </Button>
        <Button
          variant={this.state.compte ? "primary" : "danger"}
          onClick={() => this.setState({ compte: this.state.compte + 1 })}
        >
          {this.state.compte}
        </Button>
        {this.state.showMeResult && <Main />}
      </div>
    );
  }
}
