import React, { Component } from "react";
import axiosInstance from "../axios";
import Show from "../components/Show";
import Filter from "../hoc/Filter";

class List extends Component {
  state = {
    shows: [],
    error: false
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

  render() {
    let showsList = null;

    showsList = this.state.shows.map(show => (
      <Show key={show.id} img={show.image.medium} title={show.name} />
    ));

    if (this.props.searchedShows.length > 1) {
      //showsList = <p>It worked!</p>;
      showsList = this.props.searchedShows.map(fShow => {
        let image = null;

        if (fShow.show.image !== null) {
          //console.log(fShow.show.image.medium);
          image = fShow.show.image.medium;
        }
        return (
          //console.log(fShow, fShow.show.name, fShow.show.image),
          <Show key={fShow.show.id} img={image} title={fShow.show.name} />
        );
      });
    }

    return <div className="list">{showsList}</div>;
  }
}

export default Filter(List);
