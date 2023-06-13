const fs = require("fs");
const path = require("path");

const UserToken = () => {
  return JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../data/userToken.json"), "utf8")
  );
};

module.exports = UserToken;
