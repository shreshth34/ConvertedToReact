import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Select from "./components/Select";
import Div from "./components/Div";
import Input from "./components/Input";
import Toolbox from "./components/Toolbox";

class App extends Component {
  constructor(props) {
    super(props);
    this.setData = this.setData.bind(this);
  }

  state = {
    arr: []
  };

  setData(arr) {
    console.log("setData called " + JSON.stringify(arr));
    this.setState({
      arr: arr
    });
  }

  render() {
    let data = this.state.arr.map(d => {
      if (d.name === "div") {
        return (
          <Div
            id={d.id}
            name={d.name}
            className={d.properties.css_class}
            elements={d.elements}
          />
        );
      } else if (d.name === "input") {
        return <Input id={d.id} type={d.type} label={d.label} />;
      }
    });

    return (
    <div className="ui container">
          <div className="ui grid">
            
          <div className="twelve wide column">
            <br />
            {data}
            </div>
            <div className="four wide column">
              <div id="right-sidebar">
                <Toolbox arr={this.state.arr} setData={this.setData} />
              </div>
            </div>
        </div>
        </div>

        
    );
  }
}

export default App;
