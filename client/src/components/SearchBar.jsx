import React, { Component } from "react";
import Styled from "styled-components";

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
    const Bar = Styled.div`
      background: #21AAB2;
      width: 100vw;
      height: 25px;
      padding: 25px 0px;
    
    `;

    const Form = Styled.form`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 450px;
    background: #444;
    background: rgba(0,0,0,.2);
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    -moz-box-shadow: 0 1px 1px rgba(0,0,0,.4) inset, 0 1px 0 rgba(255,255,255,.2);
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.4) inset, 0 1px 0 rgba(255,255,255,.2);
    box-shadow: 0 1px 1px rgba(0,0,0,.4) inset, 0 1px 0 rgba(255,255,255,.2);
    `;

    const Search = Styled.input`
    width: 330px;
    height: 20px;
    padding: 10px 5px;
    float: left;    
    font: bold 15px 'lucida sans', 'trebuchet MS', 'Tahoma';
    border: 0;
    background: #eee;
    -moz-border-radius: 3px 0 0 3px;
    -webkit-border-radius: 3px 0 0 3px;
    border-radius: 3px 0 0 3px; 

      &:focus {
        outline: 0;
        background: #fff;
        -moz-box-shadow: 0 0 2px rgba(0,0,0,.8) inset;
        -webkit-box-shadow: 0 0 2px rgba(0,0,0,.8) inset;
        box-shadow: 0 0 2px rgba(0,0,0,.8) inset;
      }
      `;

    const Button = Styled.button`
    overflow: visible;
    position: relative;
    float: right;
    border: 0;
    padding: 0;
    cursor: pointer;
    height: 40px;
    width: 110px;
    font: bold 15px/40px 'lucida sans', 'trebuchet MS', 'Tahoma';
    color: #fff;
    text-transform: uppercase;
    background: #d83c3c;
    -moz-border-radius: 0 3px 3px 0;
    -webkit-border-radius: 0 3px 3px 0;
    border-radius: 0 3px 3px 0;      
    text-shadow: 0 -1px 0 rgba(0, 0 ,0, .3);

    &:hover {
      background: #e54040;
    }

    &:active,:focus {
      background: #c42f2f; 
    }
    `;

    return (
      <Bar>
        <Form onSubmit={this.handleSubmit}>
          <Search
            type="text"
            placeholder="Search"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <Button type="submit">
            <i className="fas fa-search" />
          </Button>
        </Form>
      </Bar>
    );
  }
}

export default SearchBar;