import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Minha Homepage</h1>
        <Link to="/about">About</Link>
      </div>
    )
  }
}