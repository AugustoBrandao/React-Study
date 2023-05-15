import React from 'react';

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  //Problema Inicial: A função fetchJoke() disparava o estado no this.State() debaixo, só que antes do estado ser atualizado o componente já era renderizado denovo, e isso fazia com que aparecesse a piada antiga e depois a nova.
  async fetchJoke() {
    this.setState(
      { loading: true }, //primeiro parâmetro - atualização de estado (assíncrona)
      async () => { //segundo - execução de uma lógica assim que a atualização de estado do primeiro parâmetro for feita
        const requestHeaders = { headers: { Accept: 'application/json' } }
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
        const requestObject = await requestReturn.json();
        //Vai ativar o render novamente
        this.setState({
          loading: false,
          jokeObj: requestObject,
        })
      }
    )
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }));

    this.fetchJoke();
  }

  renderJokeElement() {
    const { jokeObj:{ joke } } = this.state;
    return (
      <div>
        <p>{ joke }</p>
        <button type="button" onClick={ this.saveJoke }>
          Salvar Piada
        </button>
      </div>
    )
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div className='card'>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

        {
          <div>{ loading ? loadingElement : this.renderJokeElement() }</div>
        }
      </div>
    );
  }
}

export default DadJoke;