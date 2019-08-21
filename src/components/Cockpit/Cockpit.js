import React from "react";
import classes from "./Cockpit.css";
const cockpit = props => {
  //let classes = ["red", "bold"].join(" "); // this is valid css class , "red bold"
  const assignedClasses = []; // creating an empty arry

  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes=['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes=['red','bold']
  }

  return (
    <div className={classes.Cockpit}>
      {" "}
      {/** adding div as jsx can have only one root component */}
      <h1> hello react</h1>
      <p className={assignedClasses.join(" ")}> This is really working !</p>
      <button className={btnClass} onClick={props.clicked}>
        {/* this is comment
      onClick={this.switchNameHandler.bind(this, "brajkishore")
      or can use - 
        () => this.switchNameHandler("BrajKishore!")
        in above syntax implicitly added return statement after "=>"
        now we can add paramter "()" it will execute in onclick only 

        recommended :- bind syntax
      */}{" "}
        Toggle person{" "}
      </button>{" "}
    </div>
  );
};

export default cockpit;
