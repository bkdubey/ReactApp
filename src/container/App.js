import React, { Component } from "react";
import classes from "./App.css"; // the name is up to you, you can give style instead of classes
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
//using radium in this module
// This covers basic section of react , need to add advance topic as well
class App extends Component {
  state = {
    //this is an array of person
    persons: [
      { id: "1", name: "braj", age: "28" },
      { id: "2", name: "kishore", age: "25" },
      { id: "3", name: "test", age: "15" }
    ],
    otherState: "some other value",
    showPersons: false
  };

  switchNameHandler = newName => {
    console.log("was clicked ");
    // react will not recognise this change and will not pick up
    //this.state.person[0].name = "braj kisore";

    // updating dom , this setstate available only in class component
    this.setState({
      persons: [
        { name: newName, age: "28" },
        { name: "kishore", age: "25" },
        { name: "dubey", age: "15" }
      ]
    });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    // or const person = Object.assign({}, this.state.persons[peronIndex])
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons; or
    // const persons = [...this.state.persons] (recommended one) ("..." spread out the element )or
    const persons = this.state.persons.slice();

    persons.splice(personIndex, 1); // for removing element from array
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    console.log("toggle handling");
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.state.nameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;

function App1() {
  return (
    <div className="App">
      <h1> hello react</h1>
    </div>
  );
}
