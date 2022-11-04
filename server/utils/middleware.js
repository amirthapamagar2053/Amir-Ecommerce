const jwt = require("jsonwebtoken");
const config = require("../utils/config");

const tokenExtractor = (req, res, next) => {
  const authorization = req.get("authorization");

  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    req.token = authorization.substring(7);
  }
  next();
};

const userExtractor = (req, res, next) => {
  const authorization = req.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    const decodedToken = jwt.verify(req.token, config.SEKRET);

    if (!decodedToken.id) {
      res.status(401).json({ error: "token missing or invalid" });
    }
    req.user = decodedToken;
  }
  next();
};

module.exports = {
  tokenExtractor,
  userExtractor,
};
