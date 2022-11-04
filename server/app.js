const express = require("express");
const cors = require("cors");
const path = require("path");
const fileUpload = require("express-fileupload");
const productRouter = require("./controllers/productRouter");
const userRouter = require("./controllers/userRouter");
const loginRouter = require("./controllers/loginRouter");
const orderRouter = require("./controllers/orderRouter");
const orderDetailRouter = require("./controllers/orderDetailRouter");
const { tokenExtractor, userExtractor } = require("./utils/middleware");

const app = express();

app.use(cors());
app.use(fileUpload({ useTempFiles: true }));

app.use(express.json());
app.use(express.static("dist"));

app.use(tokenExtractor);
app.use(userExtractor);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/orders", orderRouter);
app.use("/api/orderDetails", orderDetailRouter);

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});
module.exports = app;
