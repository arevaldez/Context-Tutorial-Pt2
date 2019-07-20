import React, { Component } from "react";
import Child from "./Child";
import { Provider } from "./Context";

class Parent extends Component {
  state = {
    toggleGrandChild: false,
    toggleName: false,
    people: [
      { id: 0, name: "Bob", age: 24 },
      { id: 1, name: "Jack", age: 22 },
      { id: 2, name: "Jill", age: 26 }
    ]
  };

  toggleComponent = () => {
    this.setState({
      toggleGrandChild: !this.state.toggleGrandChild
    });
    console.log("Toggled ", this.state.toggleGrandChild);
  };

  switchNameHandler = newName => {
    // const name = [...this.state.persons];
    // name[0].name = newName;

    this.setState({
      toggleName: !this.state.toggleName,
      persons: [
        { id: 0, name: newName, age: 24 },
        { id: 1, name: "Jack", age: 22 },
        { id: 2, name: "Jill", age: 26 }
      ]
    });
    console.log("ToggledName ", this.state.toggleName);
    console.log("ToggledName1 ", newName);
  };

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          toggleComponent: this.toggleComponent,
          switchNameHandler: e => this.switchNameHandler(e)
        }}
      >
        <Child />
      </Provider>
    );
  }
}

export default Parent;
