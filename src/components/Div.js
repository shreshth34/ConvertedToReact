import React from "react";
import Input from "./Input";

let elem;

const Div = props => {
    
  if (props.elements !== undefined) {
    elem = props.elements.map(e => {
        console.log("inp")
      if (e.name === "input") {
        return (
          <Input id={e.id} label={e.label} type={e.properties.data_type} />
        );
      }
      else if(e.name === "div"){
          console.log("divss")
        return (
            <Div id={e.id} name={e.name} className={e.properties.css_class} elements={e.elements} /> 
        ) 
        
      }
    });
  } else {
    elem = "";
  }
  return (
      
    <div onClick={props.onClick} id={props.id} className={props.className}>
      {elem} {props.children}
    </div>
  );
};

export default Div;
