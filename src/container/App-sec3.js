import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    //this is an array of person
    person: [
      { name: "braj", age: "28" },
      { name: "kishore", age: "25" },
      { name: "test", age: "15" }
    ],
    otherState: "some other value"
  };

  switchNameHandler = newName => {
    console.log("was clicked ");
    // react will not recognise this change and will not pick up
    //this.state.person[0].name = "braj kisore";

    // updating dom , this setstate available only in class component
    this.setState({
      person: [
        { name: newName, age: "28" },
        { name: "kishore", age: "25" },
        { name: "dubey", age: "15" }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      person: [
        { name: "bk", age: "28" },
        { name: event.target.value, age: "25" },
        { name: "dubey", age: "15" }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1> hello react</h1>
        <p>this is really working !</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("BrajKishore!")}
        >
          {/* this is comment
          onClick={this.switchNameHandler.bind(this, "brajkishore")
          or can use - 
            () => this.switchNameHandler("BrajKishore!")
            in above syntax implicitly added return statement after "=>"
            now we can add paramter "()" it will execute in onclick only 

            recommended :- bind syntax
          */}{" "}
          Switch name{" "}
        </button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, "dubey!")}
          changed={this.nameChangeHandler}
        >
          my Hobbies :- coding{" "}
        </Person>
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
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
