import React from "react";

import classes from "./App.module.css";
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={this.nameChangedHandler}
            />
          ))}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignClasses = [];
    if (this.state.persons.length <= 2) {
      assignClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi I'm react app</h1>
        <p className={assignClasses.join(" ")}>This is working</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>
          Toggle persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
