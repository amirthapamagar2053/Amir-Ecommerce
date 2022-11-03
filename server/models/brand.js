const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

class Brand extends Model {}
Brand.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    brandName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: "brand",
  }
);

module.exports = Brand;
