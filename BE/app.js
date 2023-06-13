const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const moviesTreding = require("./routes/moviesTrending");
const moviesRating = require("./routes/moviesRating");
const searchByGenre = require("./routes/searchByGenre");
const getTrailer = require("./routes/getTrailer");
const search = require("./routes/search");

app.use("/api/movies/trending", moviesTreding);
app.use("/api/movies/top-rate", moviesRating);
app.use("/api/movies/discover", searchByGenre);
app.use("/api/movies/search", search);
app.use("/api/movies/video", getTrailer);

app.use((req, res, next) => {
  res.status(404).send({
    message: "Route not found",
  });
  next();
});

app.listen(5000);
