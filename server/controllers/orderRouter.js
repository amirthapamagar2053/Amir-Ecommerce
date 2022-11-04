const { Order, User } = require("../models");

const orderRouter = require("express").Router();

orderRouter.get("/", async (req, res) => {
  const orders = await Order.findAll({ include: { model: User } });
  res.send(orders);
});

orderRouter.post("/", async (req, res) => {
  const order = { ...req.body };
  const response = await Order.create(order);
  res.send(response);
});

module.exports = orderRouter;
