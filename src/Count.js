import React, { Component, useState, useEffect } from 'react';
//class component
class Count extends Component{
  constructor(props){
    super(props);
    this.state = {
      counter:0
    }

    this.increment = this.increment.bind(this)

  }

increment = () => {
  this.setState({ counter: this.state.counter + 1 });
};

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

//functional component
// function Count(){

//   const [counter, setCounter] = useState(0);

//   function increment(){
//     setCounter(counter+1);
//   }

//   function decrement(){
//     (counter >= 1)
//     ?
//     (setCounter(counter-1))
//     :
//     (setCounter(0))
//   }

//   return <div>
//     {counter}
//     <div>
//       <button onClick ={increment} >Increment</button>
//       <button onClick ={decrement} >Decrement</button>
//     </div>
//   </div>;

// }

export default Count;
