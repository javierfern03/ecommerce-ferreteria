const ProductImages = require('../models/productImage');
const Product = require('../models/productModel');
const catchAsync = require('../utils/catchAsync');
const uploadFiles = require('../utils/supabase');

exports.getAllProducts = catchAsync(async (req, res) => {
  const products = await Product.findAll({
    where: {
      status: "active"
    },
    include: [
      {
        model: ProductImages,
        attributes: ['id', 'productId', 'productImagesUrl'],
      }
    ]
  });

  return res.status(200).json({
    status: 'success',
    message: 'The query has been successfully',
    // results: products.length,
    products,
  });
});

exports.getOneProduct = catchAsync(async (req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'todo bien',
  });
});

exports.createProduct = catchAsync(async (req, res) => {
  const { name, price, description, quantity, category, created_by } = req.body;

  const product = await Product.create({
    name,
    price,
    description,
    quantity,
    category,
    created_by,
  });

  const PromisesproductImages = req.files?.map(async (file) => {
    const uploadProductImages = await uploadFiles(file);

    return ProductImages.create({
      productId: 3,
      productImagesUrl: uploadProductImages.fullPath,
    });
  });

  await Promise.all(PromisesproductImages);

  return res.status(200).json({
    status: 'success',
    message: 'The Product has been created successfully',
    product,
  });
});

exports.updateProduct = catchAsync(async (req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'todo bien',
  });
});

exports.deleteProduct = catchAsync(async (req, res) => {
  return res.status(200).json({
    status: 'success',
    message: 'todo bien',
  });
});
