import React, { Component } from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Select from "./components/Select";
import Div from "./components/Div";
import Input from "./components/Input";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      div: {},
      data: [
        {
          id: "div1",
          name: "div",
          type: "div",
          properties: {
            css_class: "ui two column grid ",
            style: ""
          },
          elements: [
            {
              id: "div99",
              name: "div",
              type: "div",
              properties: {
                css_class: "column",
                style: ""
              },
              elements: [
                {
                  id: "input2",
                  name: "input",
                  type: "input",
                  label: "Name",
                  align: "center",
                  properties: {
                    data_type: "text",
                    css_class: "input",
                    style: ""
                  }
                },
                {
                  id: "input3",
                  name: "input",
                  type: "input",
                  label: "Age",
                  align: "center",
                  properties: {
                    data_type: "text",
                    css_class: "input",
                    style: ""
                  }
                }
              ]
            },
            {
              id: "div26363",
              name: "div",
              type: "div",
              properties: {
                css_class: "column",
                style: ""
              },
              elements: [
                {
                  id: "input898262",
                  name: "input",
                  type: "input",
                  label: "Job Title",
                  align: "center",
                  properties: {
                    data_type: "text",
                    css_class: "input",
                    style: ""
                  }
                }
              ]
            }
          ]
          // },

          // {
          //   id: "yoDiv22",
          //   name: "div",
          //   type: "div",
          //   properties: {
          //     css_class: "ui two column grid",
          //     style: ""
          //   },
          //   elements: [
          //     {
          //       id: "yoDiv22",
          //       name: "div",
          //       type: "div",
          //       properties: {
          //         css_class: "column",
          //         style: ""
          //       },
          //       elements: [
          //         {
          //           id: "veryNewInput",
          //           name: "input",
          //           type: "input",
          //           label: "Birth of Date",
          //           align: "center",
          //           properties: {
          //             data_type: "date",
          //             css_class: "ui input",
          //             style: ""
          //           }
          //         }
          //       ]
          //     }
          //   ]
        }
      ]
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

  clickableEvent = e1 => {

    console.log(e1);

  
  };

  render() {
    let data = this.state.data.map(d => {
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
      <div id="main1" className="App">
        <HelloWorld />
        <br />
        <br />
        <br />
        <div>{data}</div>
        <Div id="diffDiv" className="ui card" onClick={this.clickableEvent}>
          {" "}
          {new Date().toLocaleDateString()}{" "}
        </Div>
        <Input id="4455" label="App.js" type="text" />
      </div>
    );
  }
}

export default App;
