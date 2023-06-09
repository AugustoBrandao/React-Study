import React from 'react';
import HelloWorld from './HelloWord';
import UserProfile from './UserProfile';
import ShoppingList from './ShoppingList';
import Buttons from './Buttons';
import Form from './Form.js';
import Card from './Card';
import Counter from './Counter';
import RickAndMorty from './RickAndMorty';
import DadJoke from './DadJoke';
import Carousel from './Carousel'

import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';

//Componente que irá conter toda a aplicação
export default class App extends React.Component {
  state = {
    form: {
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: 'Estado',
    },
    carousel: {
      showCarousel: true,
      currentCategory: 'nature',
    }
  };
 
  // FUNÇÕES DO COMPONENTE FORM
  handleChange = ({ target }) => {
    const { name } = target;
    const valueField = target.type === 'checkbox' ? target.checked : target.value;
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: valueField
      }
    })); //[chave]: valor
  };

  //FUNÇÕES DO COMPONENTE CAROUSEL
  toggleCarousel = () => {
    this.setState((prevState) => ({
      carousel: {
        showCarousel: !prevState.carousel.showCarousel,
      }
    }));
  }

  render() {
    const { form, carousel:{ showCarousel, currentCategory } } = this.state;

    const joao = {
      id: 102,
      name: 'João',
      email: 'joao@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png'
    };
  
    const amelia = {
      id: 77,
      name: 'Amélia',
      email: 'amelia@gmail.com',
      avatar: 'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png'
    };
    
    return (
      <main>
      <h1>Componentes e Props</h1>
      <h2>Cada quadrado é um componente diferente</h2>
      <div className="div-items">
        <HelloWorld />
        <UserProfile user={ joao }/>
        <UserProfile user={ amelia }/>
        <ShoppingList />
      </div>
  
      <h1>Componentes com Estados e Eventos: Constructors, this e funções de evento </h1>
      <div className="div-items">
        <Buttons />
      </div>
  
      <h1>Componentes Controlados, Event Handlers Genéricos & Transmissão de informações entre Componentes</h1>
      <div className="div-items">
        <Form form={ form } handleChange={ this.handleChange }/> 
        <Card form={ form } />
      </div>

      <h1>Ciclo de Vida em React</h1>
      <div className="div-items">
        <Counter />
        <RickAndMorty />
        <DadJoke />
      </div>
      <div className="div-items">
        <button onClick={ this.toggleCarousel }>Toggle Carousel</button>
        { showCarousel && <Carousel category={ currentCategory } /> }
      </div>

      <h1>React Router: Projeto React Router no GitHub</h1>
      <div className="div-items">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route path="/about/:lastName" render={(props) => <About {...props} nome="Usuário" />} /> 
        </BrowserRouter>
      </div>
    </main>
    );
  }
}