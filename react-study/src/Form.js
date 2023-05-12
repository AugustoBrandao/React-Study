import React, { Component } from "react";

class Form extends Component {

  render() {
    const { form: {
      nome,
      email,
      idade,
      vaiComparecer,
      palavraChaveFavorita,
    }, handleChange } = this.props;

    return (
      <div>
        <h1>FORMULÁRIO</h1>
          <form className="form">
            <label>
              email
              <input
                name="email"
                type="email"
                value={ email }
                onChange={ handleChange }
              />
            </label>

            <label>
              Nome
              <input
                name="nome"
                type="text"
                value={ nome }
                onChange={ handleChange }
              />
            </label>

            <label>
              Idade
              <input
                name="idade"
                type="number"
                value={ idade }
                onChange={ handleChange }
              />
            </label>

            <label>
              Vai comparecer à conferência?
              <input
                name="vaiComparecer"
                type="checkbox"
                value={ vaiComparecer }
                onChange={ handleChange }
              />
            </label>

            <label>
              Escolha a sua palavra chave favorita:
              <select
                name="palavraChaveFavorita"
                value={ palavraChaveFavorita }
                onChange={ handleChange }
              >
                <option value="Estado">Estado</option>
                <option value="Evento">Evento</option>
                <option value="Props">Props</option>
                <option value="Hooks">Hooks</option>
              </select>
            </label>
          </form>
      </div>    
    )
  }
}

export default Form;