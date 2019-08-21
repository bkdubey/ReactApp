import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  // const stateArr= useState({  or
  const [personState, setPersonState] = useState({
    person: [
      { name: "braj", age: "28" },
      { name: "kishore", age: "25" },
      { name: "test", age: "15" }
    ]
  });

  // you can have n number of usestate in functional
  const [otherState, setOtherState] = useState("some other value");
  // donot want to update setOtherState

  console.log(personState, otherState);

  const switchNameHandler = () => {
    console.log("was clicked ");
    // react will not recognise this change and will not pick up
    //this.state.person[0].name = "braj kisore";

    // updating dom , this setstate available only in class component
    setPersonState({
      person: [
        { name: "braj kishore", age: "28" },
        { name: "kishore", age: "25" },
        { name: "dubey", age: "15" }
      ]

      // we can do this , but this is not deligate way ,to do it manually
      //otherState: personState.otherState
    });
  };

  //console.log(setPersonState);

  return (
    <div className="App">
      <h1> hello react</h1>
      <p>this is really working !</p>
      <button onClick={switchNameHandler}> Switch name </button>
      <Person
        name={personState.person[0].name}
        age={personState.person[0].age}
      />
      <Person name={personState.person[1].name} age={personState.person[1].age}>
        my Hobbies :- coding{" "}
      </Person>
      <Person
        name={personState.person[2].name}
        age={personState.person[2].age}
      />
    </div>
  );
};

export default App;

function App1() {
  return (
    <div className="App">
      <h1> hello react</h1>
    </div>
  );
}
