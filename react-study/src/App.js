import HelloWorld from './HelloWord';
import UserProfile from './UserProfile';
import ShoppingList from './ShoppingList';

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
      <HelloWorld />
      
      /* Dois Componentes utilizando as props */
      <UserProfile user={ joao }/>
      <UserProfile user={ amelia }/>
      <ShoppingList />
    </main>
  );
}

export default App;
