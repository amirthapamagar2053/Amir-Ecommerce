const loginRouter = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../utils/config");

loginRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.json({ error: "*User doesnot exists. Try again!!" });
  }
  const isCorrect = await bcrypt.compare(password, user.passwordHash);
  if (user && !isCorrect) {
    return res.json({ error: "*Wrong password. Try again!!" });
  }
  const userForToken = {
    email: user.email,
    id: user.id,
  };
  console.log("the post has been entered")
  const token = jwt.sign(userForToken, config.SEKRET);
  res.status(200).json({
    token,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    shippingAddress: user.shippingAddress,
    id: user._id,
  });
});

module.exports = loginRouter;
