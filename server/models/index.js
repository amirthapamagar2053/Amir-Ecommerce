const Brand = require("./brand");
const Category = require("./category");
const Order = require("./order");
const OrderDetail = require("./orderDetail");
const Product = require("./product");
const User = require("./user");

Category.hasMany(Product);
Product.belongsTo(Category);

Brand.hasMany(Product);
Product.belongsTo(Brand);

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(OrderDetail);
OrderDetail.belongsTo(Order);

Product.hasOne(OrderDetail);
OrderDetail.belongsTo(Product);

module.exports = {
  Product,
  Category,
  Brand,
  User,
  Order,
  OrderDetail,
};
