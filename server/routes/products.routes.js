const express = require('express');
const multer = require('multer');


const productsControllers = require('../Controllers/productsControllers');
const { upload } = require('../utils/multer');


const router = express.Router();


router.get('/', productsControllers.getAllProducts);

router
  .route('/')
  .get(productsControllers.getAllProducts)
  .post(upload.array("products", 5) ,productsControllers.createProduct);

router
  .route('/:id')
  .get(productsControllers.getOneProduct)
  .patch(productsControllers.updateProduct)
  .delete(productsControllers.deleteProduct);


module.exports = router;
