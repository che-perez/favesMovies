import React, { Component } from 'react';
import Styled from 'styled-components';

import Movies from './Movies';

class MovieResults extends Component {


    render() {
        const Container = Styled.div`
        
        
        `;

        const Button = Styled.button`
        
        
        `;

        return (
            <Container>
                <Button>All 0</Button>
                <Button>Faves 0</Button>
                <Movies />
            </Container>
        )

        
    }
}

export default MovieResults;