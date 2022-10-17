import React, {Component} from "react";
import "./style.css";
import Count from "./Count.js"
import AddItemInList from "./AddItemInList.js";
class App extends Component{

  render(){
    return(
      <div>
        <h1>Bonjour Mouktar</h1>
      <Count/>
      <AddItemInList/>
      </div>      
    )
  }

}

export default App