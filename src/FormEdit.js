import React, { Component } from "react";

class FormEdit extends Component{
    constructor(){
        super();
        this.state=
        {
            firstName:'John', 
            lastName:'Smith',
            edit: false
        };
        this.baseState=this.state;
                    }
    edit=()=>{
        this.setState({edit:true});
    }
    save=()=>{
            this.baseState=this.state;
            this.setState({edit: false});
        }
    cancel=()=>{
        this.setState({...this.baseState, edit:false});
    }
    changeName=(event)=>{
        //console.log("base", this.baseState);
        //console.log("state",this.state);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
            let showEdit=this.state.edit===false ? (
                <div>
                    <div className="firstname">First Name:{this.state.firstName}
                    </div>
                    <div className="lastname">Last Name: {this.state.lastName}
                    </div>
                    <button onClick={this.edit}>EDIT</button>
                </div>
                ) : (
                <div>
                    <input
                    className="FNChange"
                    type="text"
                    name="firstName"
                    onChange={this.changeName}
                    placeholder={this.state.firstName}
                    />
                    <input
                    className="LNChange"
                    type="text"
                    name="lastName"
                    onChange={this.changeName}
                    placeholder={this.state.lastName}
                    />
                    <button className="saveButton" onClick={this.save}>
                        SAVE
                    </button>
                    <button className="cancelButton" onClick={this.cancel}>
                        CANCEL    
                    </button>
                </div>
            );
            return <div className="display container">{showEdit}</div>
        }
}
export default FormEdit;