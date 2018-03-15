const express = require('express');
const favoritesController = require('../controllers/favoritesController');
const searchController = require('../controllers/searchController');
const searchHelper = require('../services/search-helpers');

const apiRoutes = express.Router();

apiRoutes.get('/favorites', favoritesController.index);
apiRoutes.get('/favorites/:id', favoritesController.show);
apiRoutes.post('/favorites', favoritesController.create);
apiRoutes.delete('/favorites/:id', favoritesController.destroy);

apiRoutes.get('/search/:title', searchHelper.searchMovie, searchController.sendApiMovie);

module.exports = apiRoutes;