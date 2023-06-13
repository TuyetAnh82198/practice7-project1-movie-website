const userTokenModel = require("./models/UserToken");

const checkAuthentication = (req, res, next) => {
  const userTokens = userTokenModel();
  const reqToken = req.headers.authorization;

  if (!reqToken) {
    return res.status(401).send({ message: "Unauthorized" });
  } else {
    const userToken = userTokens.find((user) => user.token === reqToken);
    if (!userToken) {
      return res.status(401).send({ message: "Unauthorized" });
    } else {
      next();
    }
  }
};

module.exports = checkAuthentication;
