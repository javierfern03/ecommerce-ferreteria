const { db } = require('../database/config');
const { DataTypes } = require('sequelize');

const ProductImages = db.define('productImages', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productImagesUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("active", "desabled"),
    allowNull: false,
    defaultValue: 'active',
  },
});

module.exports = ProductImages;
