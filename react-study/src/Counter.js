import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0
      };
      console.log("construtor");
    }
    
    //Ao carregar a página...
    componentDidMount() {
      console.log("componentDidMount");
    }
  
    //Aqui podemos impedir uma renderização
    shouldComponentUpdate(nextProps, nextState) {
      console.log("shouldComponentUpdate", this.state, nextState);
      return true;
    }
    
    //É aqui que o estado é atualizado, de fato
    componentDidUpdate(prevProps, prevState) {
      console.log("componentDidUpdate", this.state, prevState);
    }
  
    render() {
      console.log("render");
      return (
        <div className="counter">
          <p>Contador</p>
          <button
            onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
          >
            Soma
          </button>
          <p>{this.state.counter}</p>
        </div>
      );
    }
  }