const { User } = require("../models");
const bcrypt = require("bcrypt");
const userRouter = require("express").Router();

userRouter.get("/", async (req, res) => {
  const users = await User.findAll();

  res.json(users);
});
userRouter.get("/:email", async (req, res) => {
  const user = await User.findOne({ where: { email: req.params.email } });

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
    await User.update(
      {
        shippingAddress: req.body.shippingAddress,
      },
      { where: { id: req.user.id } }
    );
    res.send(req.user);
  } catch (error) {
    next(error);
  }
});

module.exports = userRouter;
