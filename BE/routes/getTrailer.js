const express = require("express");

const getTrailer = require("../controllers/getTrailer");
const checkAuthentication = require("../middleware");

const router = express.Router();

const getTrailerRouter = router.post("/", checkAuthentication, getTrailer);

module.exports = getTrailerRouter;
