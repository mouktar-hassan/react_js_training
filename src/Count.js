import React, {Component} from "react";

class Count extends Component{
  constructor(props){
    super(props);
    increment : 0;
    this.state = {
      counter:0
    } 

  }

  // componentDidMount(){

  // }

  // componentWillUnMount(){

  // }

  increment = () => {
    // this.setState((state,props)=>({
    //   counter : state.counter + props.increment
    // }));
    this.setState({ counter : this.state.counter + 1 });
  }
  decrement = () => {
    (this.state.counter >=1) 
    ? 
    this.setState({ counter : this.state.counter - 1 })
    : 
    this.setState({ counter : 0 })
  }

  render(){
    return(
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.increment} >Increment</button>
        <button onClick={this.decrement} >Decrement</button>
      </div>      
    )
  }
}

export default Count;
