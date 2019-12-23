import React from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends React.Component {
  state = {
    persons: [
      { name: "Vu", age: 22 },
      { name: "Max", age: 28 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some value other",
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: "Max", age: 38 },
        { name: "Stephanie", age: 36 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "vu tran", age: 22 },
        { name: event.target.value, age: 38 },
        { name: "Stephanie", age: 36 }
      ]
    });
  };

  tooglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => (
            <Person
              name={person.name}
              age={person.age}
              click={() => this.switchNameHandler("vu")}
              changed={this.nameChangedHandler}
            />
          ))}
          {/* <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          >
            This is children
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm react app</h1>
        <button style={style} onClick={this.tooglePersonHandler}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
