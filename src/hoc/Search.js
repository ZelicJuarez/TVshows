import React, { Component, Fragment } from "react";
import Button from "../components/UI/Button";
import axiosInstance from "../axios";

const Search = WrappedComponent => {
  return class extends Component {
    state = {
      query: "",
      searchedShows: []
    };

    getShows = () => {
      axiosInstance
        .get(`/search/shows?q=${this.state.query}`)
        .then(res => this.setState({ searchedShows: res.data }))
        .catch(error => {
          this.setState({ error: true });
        });
      //console.log(this.state.searchedShows);
    };

    handleInputChange = e => {
      const query = e.target.value;
      this.setState({ query }, () => {
        if (this.state.query.length > 0) {
          this.getShows();
        }
      });
    };

    render() {
      console.log(this.state.searchedShows);
      return (
        <Fragment>
          <div className="search">
            <h1>My TV Shows</h1>
            <form>
              <input
                className="search__input"
                placeholder="Type to search..."
                value={this.state.query}
                onChange={this.handleInputChange}
              />
            </form>
            <p>{this.state.query}</p>
            <Button />
          </div>
          <WrappedComponent
            query={this.state.query}
            searchedShows={this.state.searchedShows}
          />
        </Fragment>
      );
    }
  };
};

export default Search;
