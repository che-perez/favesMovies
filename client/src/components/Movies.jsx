import React from "react";

const Movies = function(props) {
  let poster;
  if (props.poster) {
    poster = (
      <img
        src={`https://image.tmdb.org/t/p/w200${props.poster}`}
        alt={props.title}
      />
    );
  } else {
    poster = <img src="http://via.placeholder.com/200x300" alt={props.title} />;
  }

  return (
    <div>
      {poster}
      <h4>{props.title}</h4>
      <h6>{props.release_date}</h6>
    </div>
  );
};

export default Movies;
