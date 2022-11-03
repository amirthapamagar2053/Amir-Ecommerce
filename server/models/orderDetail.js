const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

class OrderDetail extends Model {}
OrderDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "orders", key: "id" },
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "products", key: "id" },
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "orderDetail",
  }
);

module.exports = OrderDetail;
