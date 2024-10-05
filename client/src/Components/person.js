import React, { Component } from 'react';

export class person extends Component {
  render() {
    return (
      <div>
        <h2>
            I am {person.name}.i am {person.age}years old I know {person.skill}
        </h2>
      </div>
    );
  }
}

export default person;
