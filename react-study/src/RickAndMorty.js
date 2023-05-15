import React from "react";

export default class RickAndMorty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  fetchCharacters = async () => {
    const request = await fetch('https://rickandmortyapi.com/api/character');
    const data = await request.json();
    this.setState({ characters: data.results })
  }

  //Ao carregar a página... Fase de montagem
  //Ótimo lugar para se fazer requisições
  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters (API):
        </h1>
        {characters.map((character, index) => {
          return(
            <div className="div-inline" key={ index }>
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
            </div>
          )
        })}
      </div>
    );
  }
}