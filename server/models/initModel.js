const ProductImages = require('./productImage');
const Product = require('./productModel');

const initModel = () => {
  //1 Product <-----> N ProductImages
  Product.hasMany(ProductImages);
  ProductImages.belongsTo(Product);
};

module.exports = initModel;
