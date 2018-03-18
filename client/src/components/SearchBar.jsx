import React, { Component } from "react";
import Styled from "styled-components";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
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
    const Form = Styled.form`
        
        
        `;

    const Search = Styled.input`
        
        
        `;

    const Button = Styled.button`
        
        
        `;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Search
          type="text"
          placeholder="Search"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <Button type="submit">
          <i className="fas fa-search" />
        </Button>
      </Form>
    );
  }
}

export default SearchBar;
