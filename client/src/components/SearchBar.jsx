import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    this.props.searchMovie(this.state.title);
    e.preventDefault();
  }

  render() {

    return (
      <div className="bar" >
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="search"
            type="text"
            placeholder="Search"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <button className="button" type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;