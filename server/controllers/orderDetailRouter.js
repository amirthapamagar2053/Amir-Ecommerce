const { Product, OrderDetail, Order } = require("../models");

const orderDetailRouter = require("express").Router();

orderDetailRouter.get("/", async (req, res) => {
  try {
    const orders = await OrderDetail.findAll({
      include: [
        {
          model: Product,
          attributes: ["productName", "price", "quantity", "imagePath"],
        },
      ],
    });
    res.send(orders);
  } catch (err) {
    res.send(err);
  }
});
// orderDetailRouter.get("/:id", async (req, res) => {
//   const order = OrderDetail.findOne({
//     where: { id: req.params.id },
//     include: [
//       { model: Product, attributes: ["productName", "price", "quantity"] },
//     ],
//   });
//   res.send(order);
// });

orderDetailRouter.get("/cart", async (req, res) => {
  try {
    console.log("the get cart entered");
    const pendingOrder = await Order.findOne({
      where: {
        status: "pending",
        userId: req.user.id,
      },
    });
    if (!pendingOrder) {
      return res.send([]);
    }

    const cartItems = await OrderDetail.findAll({
      where: {
        orderId: pendingOrder.id,
      },
      include: [
        {
          model: Product,
          attributes: ["productName", "imagePath", "price", "quantity"],
        },
      ],
    });
    console.log("the cartitems is", cartItems);
    res.send(cartItems);
  } catch (err) {
    res.send(err);
  }
});

orderDetailRouter.post("/", async (req, res) => {
  try {
    const pendingOrder = await Order.findOne({
      where: {
        status: "pending",
        userId: req.user.id,
      },
    });

    if (pendingOrder) {
      const order = { productId: req.body.productId, orderId: pendingOrder.id };
      const response = await OrderDetail.create(order);
      res.send(response);
    } else {
      const userId = req.user.id;
      const newOrder = await Order.create({ userId });
      const order = { productId: req.body.productId, orderId: newOrder.id };
      const response = await OrderDetail.create(order);
      res.json(response);
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = orderDetailRouter;
