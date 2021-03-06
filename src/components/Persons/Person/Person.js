import React from "react";
import classes from  "./Person.css"; // need extension here , only omit for java script file


const person = props => {
  
  return (
    <div className={classes.Person} >
      <p onClick={props.click}>
        I am a {props.name} and {props.age} years old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
