import React, { Component } from "react";
import axiosInstance from "../axios";
import Show from "../components/Show";

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
    return (
      <div className="list">
        {this.state.shows.map(show => (
          <Show key={show.id} img={show.image.medium} title={show.name} />
        ))}
      </div>
    );
  }
}

export default List;

/* <h1>My TV Shows</h1>
        <input
          type="text"
          className="filter__input"
          placeholder="Type to filter..."
          value={query}
        />
        <Button /> */
//onChange={getInput}
