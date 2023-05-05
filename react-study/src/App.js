import HelloWorld from './HelloWord';
import UserProfile from './UserProfile';
import ShoppingList from './ShoppingList';
import Buttons from './Buttons';

//Componente que irá conter toda a aplicação
function App() {

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

  //Retornar o componente HelloWorld
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
    </main>
  );
}

export default App;
