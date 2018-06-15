import React, { Component } from 'react';
import './command.css';
import { Input } from 'antd';
const { textarea } = Input;

class Command extends Component {
    constructor(props){
        super(props)
        this.state = {
            counter: 2,
            text: 1.
    }
}

componentDidMount(){
    
} 
//ON ENTER LINE NUMBER CHANGED
onKeyDown=(e)=> {
        // console.log(this.state.text)
        // console.log(this.state.counter)
    if(this.state.counter!=11){
    // console.log(e.keyCode);
    if (e.keyCode ===13) {
    //   console.log(this.refs.text);
      this.refs.text.value = `${this.refs.text.value} \n${this.state.counter++}. `;
      e.preventDefault();
      e.stopPropagation();
    }

  }
}
    render() {
        return (
            <textarea className="command" col="32" ref="text" onKeyDown={this.onKeyDown} >
                {this.state.text}
        </textarea>
    
        );
    }
}

export default Command;
