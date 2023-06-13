const express = require("express");

const rating = require("../controllers/movieRating");
const checkAuthentication = require("../middleware");

const router = express.Router();

const moviesRating = router.get("/:page?", checkAuthentication, rating);

module.exports = moviesRating;
