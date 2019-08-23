import React, { Component } from "react";
import axiosInstance from "../axios";
import Show from "../components/Show";
import Search from "../hoc/Search";
import Favorites from "../components/Favorites";

class List extends Component {
  state = {
    shows: [],
    error: false,
    value: null,
    likes: [],
    liked: false
  };

  componentDidMount() {
    axiosInstance
      .get("/shows")
      .then(res => {
        console.log(res.data);
        this.setState({ shows: res.data });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  onAddFavorite = () => {
    this.setState(state => {
      const likes = state.likes.concat(state.value);

      return {
        likes,
        value: ""
      };
    });
  };

  selectedShow = (id, title, img) => {
    //console.log(id);
    this.setState({ value: { id, title, img } }, () => {
      if (this.state.value !== null) {
        this.onAddFavorite();
      }
    });
  };

  render() {
    console.log(this.state.value);
    //console.log(this.state.likes);

    let showsList = null;
    let key = null;
    let image = null;
    let title = null;
    let clicked = null;

    if (this.props.searchedShows.length > 1) {
      //showsList = <p>It worked!</p>;
      showsList = this.props.searchedShows.map(fShow => {
        /* let key = null;
        let image = null;
        let title = null;
        let clicked = null; */

        //let image = null;

        if (fShow.show.image !== null) {
          //console.log(fShow.show.image.medium);
          image = fShow.show.image.medium;
        }

        key = fShow.show.id;
        title = fShow.show.name;
        clicked = () =>
          this.selectedShow(
            fShow.show.id,
            fShow.show.name,
            fShow.show.image.medium
          );

        return (
          //console.log(fShow, fShow.show.name, fShow.show.image),
          //console.log(key, title),
          <Show
            /*key={fShow.show.id}
            img={image}
            title={fShow.show.name}
            clicked={() => this.favoritesHandler(fShow.show.id)}*/

            key={key}
            img={image}
            title={title}
            clicked={clicked}
          />
        );
      });
    } else {
      showsList = this.state.shows.map(show => {
        image = show.image.medium;
        key = show.id;
        title = show.name;
        clicked = () =>
          this.selectedShow(show.id, show.name, show.image.medium);

        return (
          <Show
            /*key={show.id}
            img={show.image.medium}
            title={show.name}
            clicked={() => this.favoritesHandler(show.id)} //CORRECT DRY*/

            key={key}
            img={image}
            title={title}
            clicked={clicked}
          />
        );
      });
    }

    console.log(showsList);
    //let test = showsList;
    //console.log(test);

    //console.log(this.state.likes);

    return (
      <div className="list">
        <Favorites favorites={this.state.likes} />
        {showsList}
      </div>
    );
  }
}

export default Search(List);
