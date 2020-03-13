import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Select from "./components/Select";
import Div from "./components/Div";
import Input from "./components/Input";
import Toolbox from "./components/Toolbox"

class App extends Component {
  constructor(props) {
    super(props);
    this.setData = this.setData.bind(this)
    
  }

  state = {
    arr: []
  };

  setData(arr){
    console.log("setData called " + JSON.stringify(arr))
    this.setState({
            arr: arr
        }
    )
}

  render() {


    let data = this.state.arr.map(d => {
      return (
        <Div
          id={d.id}
          name={d.name}
          className={d.properties.css_class}
          elements={d.elements}
        />
      );
    });

    return (
      <div  className="App">
        <div className="ui grid">
        <div className="ui two column grid">
          <div className="column">
        <div id= "right-sidebar" ><Toolbox arr={this.state.arr}   setData={this.setData}/></div>
        </div>
        </div>
<div className="column">
        {data}
        </div>
        </div>

        
        <br />
        <br />
        <br />
       
        

      </div>
    );
  }
}

export default App;
