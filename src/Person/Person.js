import React from "react";
import "./Person.css"; // need extension here , only omit for java script file
import Radium from "radium";

const person = props => {
  const style = {
    //redium will parse below
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        I am a {props.name} and {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
