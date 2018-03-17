import React, { Component } from 'react';
import Styled from 'styled-components';


class SearchBar extends Component {


    render() {
        const Form = Styled.form`
        
        
        `;

        const Search = Styled.input`
        
        
        `;

        const Button = Styled.button`
        
        
        `;



        return (
            <Form>
            <Search type='text' placeholder="Search" />
            <Button type='submit'><i class="fas fa-search"></i></Button>
            </Form>
        )
    }
}

export default SearchBar;