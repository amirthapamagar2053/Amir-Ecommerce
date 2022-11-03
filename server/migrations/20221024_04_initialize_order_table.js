const { DataTypes } = require("sequelize");
module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable("orders", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id" },
      },
      status: {
        type: DataTypes.ENUM("pending", "shipped", "delivered", "completed"),
        defaultValue: "pending",
      },
    });
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable("orders");
  },
};
