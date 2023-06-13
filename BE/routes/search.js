const express = require("express");

const search = require("../controllers/search");
const checkAuthentication = require("../middleware");

const router = express.Router();

const searchRouter = router.post("/:page?", checkAuthentication, search);

module.exports = searchRouter;
