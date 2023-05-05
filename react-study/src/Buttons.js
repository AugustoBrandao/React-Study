import React from "react";
import FavoriteButton from "./FavoriteButton";

class Buttons extends React.Component {
  
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      cliques: 0
    }
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      cliques: estadoAnterior.cliques +1,
    }))
  }

  changeBtnColor(number) {
    return (number % 2 === 0) ? 'green' : 'red';
  }

  render() {
    return(
      <div className="div-btn">
        <p>Botão dinâmico que altera o seu valor de acordo com o estado do componente. </p>
        <button 
        onClick={ this.handleClick }
        style={{backgroundColor : this.changeBtnColor(this.state.cliques)}} >
        { this.state.cliques }
        </button>
        <FavoriteButton /> 
      </div>
    )
  }
}

export default Buttons;