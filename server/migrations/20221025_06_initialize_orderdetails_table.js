const { DataTypes } = require("sequelize");
module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable("order_details", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "orders", key: "id" },
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "products", key: "id" },
      },
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable("orders_details");
  },
};
