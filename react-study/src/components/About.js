import React from "react";
import { Link } from 'react-router-dom';

export default class About extends React.Component {
  render() {
    const { nome } = this.props;
    const { lastName } = this.props.match.params;
    return (
      <div>
        <p>Seja bem vindo: {nome} {lastName}</p>
        <Link to="/">Voltar à Home</Link>
      </div>
    );
  }
}