import React from "react";
import Styled from 'styled-components';


const Header = Styled.div`
background: #777777;
color: white;
text-align: center;
padding: 10px 0px;
letter-spacing: 2px;
font-weight: bold;
`;

const Container = Styled.div`
  width: 70vw;

`;


const MovieDetails = function() {
  return (
    <Container>
      <Header> DETAILS</Header>
   <p>Movie Details...</p>
   </Container>

  )
};

export default MovieDetails;
