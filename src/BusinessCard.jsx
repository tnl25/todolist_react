import React, { Component } from 'react';

class BusinessCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1> {this.props.name} </h1>
        <h2> {this.props.title} </h2>
        <ul className="ul-style">
        {this.props.links.map(link => <li>{link}</li>)}
        </ul>
      </div>
    );
  }
}

export default BusinessCard;