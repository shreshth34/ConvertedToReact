import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Select from "./components/Select";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      select: {
        selected_value: "text",
        select_id: "type_of_input",
        some_value: ["date", "datetime", "email"]
      },
      div:{},
      data: []
    };
  }

  optionChangeHandler = e => {
    this.setState({
      select: {
        selected_value: e,

        select_id: "type_of_input",

        some_value: ["date", "datetime", "email"]
      }
    });
  };

  sendDivToScreen = () => {};

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />       */}

          <HelloWorld />

          <Select
            select_id={this.state.select.select_id}
            selected_value={this.state.select.selected_value}
            some_value={this.state.select.some_value}
            changed={this.optionChangeHandler}
          />
        </header>
      </div>
    );
  }
}
export default App;
