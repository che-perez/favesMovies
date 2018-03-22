import React from "react";
import Styled from "styled-components";

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
  height: 100vh;
  background: #EEE;
  display: flex;
  flex-direction: column;
`;

const Hero = Styled.div`
  position: relative;
  background: #21AAB2;
`;

const Message = Styled.h1`
  align-self: center;
  position: relative;
  top: 45%;
  transform: translateY(-45%);
  font-size: 10vmin;
  color: #777777

`;

const Title = Styled.span`
color: white;
text-shadow: 2px 2px 4px #000000;
letter-spacing: 2px;
font-size: 6vmin;
font-weight: bold;
position: absolute;
bottom: 10px;
left: 16px;

`;
const Img = Styled.img`
  width: 100%
  max-width: 70vw;
  height: auto;
`;

const DetailsDiv = Styled.div`
  position: relative;
  width: 100%;
  background: #21AAB2;

`;
const Summary = Styled.div`
color: white;
padding: 25px;
width: 100%
max-width: 55vw;
`;

const Poster = Styled.img`
max-width: 150px;
width: 100%
height: auto;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
position: absolute;
margin-right: 20px;
right: 0;
top: 15%;

`;

const Div = Styled.div`
width: 100%
max-width: 70vw;
max-height: 700px;
`;

const MovieDetails = function(props) {
  console.log(props);
  return (
    <Container>
      <Header> DETAILS</Header>

      {props.detailsLoaded ? (
        <Div>
          <Hero>
            <Img
              src={`https://image.tmdb.org/t/p/original${
                props.details[0].backdrop_path
              }`}
            />
            <Title>{props.details[0].title}</Title>
          </Hero>
          <DetailsDiv>
            <Summary>{props.details[0].overview}</Summary>
            <Poster
              src={`https://image.tmdb.org/t/p/w200/${
                props.details[0].poster_path
              }`}
            />
          </DetailsDiv>{" "}
        </Div>
      ) : (
        <Message>Select a Movie</Message>
      )}
    </Container>
  );
};

export default MovieDetails;