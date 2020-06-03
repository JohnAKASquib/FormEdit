import React, { Component } from "react";

class FormEdit extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "John",
      lastName: "Smith",
      edit: false
    };
    this.baseState = this.state;
  }
  edit = () => {
    this.setState({ edit: true });
  };
  save = () => {
    this.baseState = this.state;
    this.setState({ edit: false });
  };

  cancel = () => {
    this.setState({
      firstName: this.currentState.firstName,
      lastName: this.currentState.lastName,
      edit: false
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {}
}
export default FormEdit;