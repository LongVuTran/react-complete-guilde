import React from "react";
import PropsTypes from "prop-types";

import WithClass from "../../../hoc/WithClass";
import Aux from "../../../hoc/Auxiliary";
import classes from "./Person.module.css";
import AuthContext from "../../../context/auth-context";

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMound() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please login!!</p>
        )}
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          // ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propsTypes = {
  click: PropsTypes.func,
  name: PropsTypes.string,
  age: PropsTypes.number,
  changed: PropsTypes.func
};

export default WithClass(Person, classes.Person);
