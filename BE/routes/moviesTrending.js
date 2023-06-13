const express = require("express");

const trending = require("../controllers/movieTrending");
const checkAuthentication = require("../middleware");

const router = express.Router();

const moviesTrending = router.get("/:page?", checkAuthentication, trending);

module.exports = moviesTrending;
