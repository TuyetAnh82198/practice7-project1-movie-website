const express = require("express");
const searchByGenre = require("../controllers/searchByGenre");
const checkAuthentication = require("../middleware");

const router = express.Router();

const searchByGenreRouter = router.get(
  "/:genre/:page?",
  checkAuthentication,
  searchByGenre
);

module.exports = searchByGenreRouter;
