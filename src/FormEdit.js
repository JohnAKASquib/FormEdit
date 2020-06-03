import React, { Component } from "react";

export default class FormEdit extends Component {

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
      firstName: this.baseState.firstName,
      lastName: this.baseState.lastName,
      edit: false
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render(){
    if(this.state.edit===false){
        return (
            <div id="form">
                <p>First name: {this.state.firstName}</p>
                <p>Last name: {this.state.lastName}</p>
                <button onClick={this.edit}>edit</button>
            </div>
        )
    }
    else
        return(
            <div id="form">
            <input
              className="firstchange"
              type="text"
              name="firstName"
              onChange={this.handleChange}
              placeholder={this.state.firstName}
            />
            <input
              className="lastchange"
              type="text"
              name="lastName"
              placeholder={this.state.lastName}
              onChange={this.handleChange}
            />
            <button className="savebutton" onClick={this.save}>
              save
            </button>
            <button className="cancelbutton" onClick={this.cancel}>
              cancel
            </button>
          </div>
        )
  }
}
