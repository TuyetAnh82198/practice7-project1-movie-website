const moviesModel = require("../models/Movies");

const getTrailer = (req, res) => {
  // console.log(req.body);
  let film_id;
  if (req.body) {
    film_id = req.body.movieId;
    // console.log(film_id);
  } else {
    return res.status(400).send({ message: "Not found film_id parram." });
  }

  const videosList = moviesModel.videos();
  // console.log(videosList);
  const foundMovie = videosList.find((movie) => movie.id === film_id);
  // console.log(foundMovie);
  if (foundMovie) {
    const foundVideos = foundMovie.videos.filter(
      (video) =>
        video.official === true &&
        video.site === "YouTube" &&
        (video.type === "Trailer" || video.type === "Teaser")
    );
    const sortedVideos = foundVideos.sort(
      (a, b) => new Date(b.published_at) - new Date(a.published_at)
    );
    console.log(sortedVideos);
    return res.status(200).json(sortedVideos);
  } else {
    return res.status(400).send({ message: "Not found video." });
  }
  //   res.send(moviesModel.videos());
};

module.exports = getTrailer;
