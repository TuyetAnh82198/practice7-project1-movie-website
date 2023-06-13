const fs = require("fs");
const path = require("path");

const Movies = {
  all: function () {
    return JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../data/movieList.json"), "utf8")
    );
  },
  genre: function () {
    return JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../data/genreList.json"), "utf8")
    );
  },
  videos: function () {
    return JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "../data/videoList.json"), "utf8")
    );
  },
};

module.exports = Movies;
