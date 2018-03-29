require("dotenv").config();
require('isomorphic-fetch');


const API_KEY = process.env.API_SECRET_KEY;

function searchMovie(req, res, next) {
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${req.params.title}&include_adult=false`
  )
    .then(fetchRes => {
      return fetchRes.json();
    })
    .then(jsonRes => {
      console.log(jsonRes.results);
      res.locals.movieSearch = jsonRes.results;
      next();
    }).catch(err => {
        console.log(err);
        next();
    });
};

module.exports = {
    searchMovie,
}