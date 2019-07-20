import React from "react";
import { Consumer } from "./Context";

function GrandChild() {
  return (
    <Consumer>
      {context => (
        <div>
          <h1>Granchild Component</h1>
          {context.state.people.map(person => {
            return (
              <p key={person.id}>
                Hi, I am {person.name} and I am {person.age} years old.
              </p>
            );
          })}

          <button
            onClick={
              context.state.toggleName
                ? () => context.switchNameHandler("Bob")
                : () => context.switchNameHandler("Mark")
            }
          >
            Toggle Name
          </button>
        </div>
      )}
    </Consumer>
  );
}

export default GrandChild;
