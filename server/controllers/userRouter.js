const { User } = require("../models");
const bcrypt = require("bcrypt");
const userRouter = require("express").Router();

userRouter.get("/", async (req, res) => {
  const users = await User.findAll();

  res.json(users);
});
userRouter.get("/:id", async (req, res) => {
  const user = await User.findOne({ where: { id: req.params.id } });

  res.json(user);
});

userRouter.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingEmail = await User.findOne({
      where: { email: email },
    });
    if (existingEmail) {
      return res.json({ error: "*Email already exists. Try with new one!!" });
    }
    if (password.length < 8) {
      return res.json({
        error: "*Password lenght must be at least 8 character!!",
      });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = {
      firstName,
      lastName,
      email,
      passwordHash,
    };

    const savedUser = await User.create(user);

    res.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
});

userRouter.put("/shipping", async (req, res, next) => {
  try {
    // console.log("the put entered", req.body.shippingAddress);
    // console.log("the user id is", req.user.id);
    let user = await User.findOne({ where: { id: req.user.id } });
    user.shippingAddress = req.body.shippingAddress;
    user.save();
    // console.log("the test is", test);
    // console.log("the update user data is ", req.user);
    // res.send(req.user);
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
