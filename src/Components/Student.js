import React, { Component } from 'react'
import Marks from './Marks';

export default class Student extends Component {
    constructor(){
        super();
        this.state = {
            roll: 101
        };
    }
    clickHandle = () => {
        console.log("button clicked");
        this.setState({roll: this.state.roll+1});    
    }

    render() {
        console.log("Student Rendered");
        return (
            <div>
                <Marks roll={this.state.roll}/>
                <button onClick={this.clickHandle}> Change</button>
            </div>
        )
    }
}
