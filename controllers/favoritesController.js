const Favorites = require("../models/Favorites");

const favoritesController = {};

favoritesController.index = (req, res) => {
  Favorites.findAll()
    .then(movies => {
      res.json({
        message: "OK",
        data: { movies }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: "400", err });
    });
};

favoritesController.create = (req, res) => {
  Favorites.create({
    title: req.body.title,
    overview: req.body.overview,
    poster_path: req.body.poster_path,
    backdrop_path: req.body.backdrop_path,
    movie_id: req.body.movie_id,
    release_date: req.body.release_date
  })
    .then(movie => {
      res.json({
        message: "OK",
        data: { movie }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: "400", err });
    });
};

favoritesController.show = (req, res) => {
  Favorites.findById(req.params.id)
    .then(movie => {
        res.json({
            message: 'OK',
            data: { movie },
        });
    }).catch(err => {
        res.status(400).json({ message: '400', err });
    });
};

favoritesController.destroy = (req, res) => {
    Favorites.destroy(req.params.id)
        .then(() => {
            res.json({ message: 'movie removed from favorites' });
        }).catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
};

module.exports = favoritesController;