const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

class Order extends Model {}
Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "id" },
    },
    status: {
      type: DataTypes.ENUM("pending", "shipped", "delivered", "completed"),
      defaultValue: "pending",
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "order",
  }
);

module.exports = Order;
