

const searchController = {};
 
searchController.index = (req, res) => {
  res.json({
    message: 'Search index route',
  });
}

searchController.sendApiMovie = (req, res) => {
  res.json({ 
    message: `Searching all movies with ${req.params.title}`,
    results: res.locals.movieSearch,
  })
}

module.exports = searchController;