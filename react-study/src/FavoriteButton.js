import React from "react";
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'; //npm i react-icons

export default class FavoriteButton extends React.Component {
  state = {
    isFavorite: false,
  };

  //Toda vez que uma função lida com eventos, ela deve começar com handle
  handleFavorite = () => {
    this.setState((prevState) => {
      return {
        isFavorite: !prevState.isFavorite,
      };
    });
  };

  render() {
    const { isFavorite } = this.state;
    return (
      <button type="button" onClick={ this.handleFavorite } id="likeBtn">
        {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
      </button>
    );
  }
}