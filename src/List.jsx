import React, { Component } from 'react';

const names = [
    'Ernesto Garner',
    'Mitchell Rice',
    'Travis Freeman',
    'Jenny Lane',
    'Viola Baldwin',
    'Donna Alvarado',
    'Kelly Guzman',
    'Kirk Paul',
    'Edna Jordan',
    'Juana Bates'
  ];

class List extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
            <h2>Customer List</h2>
            <ul className="ul-style">
                {names.map(name => <li>{name}</li>)}
            </ul>
        </div>

        );
    }
}

export default List;

