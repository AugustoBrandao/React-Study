import React from "react";

export default class Card extends React.Component {
  render() {
    const { form: {
      nome,
      email,
      idade,
      vaiComparecer,
      palavraChaveFavorita,
    } } = this.props;

    return (
      <div>
        <h1>Card</h1>
        <div className="card">
          <h3>{ nome }</h3>
          <p>{ email }</p>
          <p>{ idade }</p>
          { vaiComparecer ? <p>Vai Comparecer </p> : <p>Não vai comparecer</p>}
          <p>{ palavraChaveFavorita }</p>
        </div>
      </div>
    )
  }
}