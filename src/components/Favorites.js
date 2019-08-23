import React, { Component } from "react";
import Show from "./Show";

class Favorites extends Component {
  state = {};

  render() {
    //console.log(this.props.favorites);
    //let items = this.props.items;

    // const selected = items.map(item => console.log(item.key));

    //console.log(this.addFavorite());

    let items = null;

    items = this.props.favorites.map(favorite => {
      //console.log(favorite);
      return (
        <Show img={favorite.img} key={favorite.id} title={favorite.title} />
      );
    });

    return (
      <div>
        <h1>Favorites</h1>
        {items}
      </div>
    );
  }
}

export default Favorites;
