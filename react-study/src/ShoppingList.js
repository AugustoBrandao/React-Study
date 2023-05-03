import React, { Component } from 'react';

class ShoppingList extends Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    
    const itens = shoppingList.map((item, index) => {
      return <li key={index}>{item}</li>
    })

    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>
          {itens}
        </ul>
      </div>
    )
  }
}

export default ShoppingList;