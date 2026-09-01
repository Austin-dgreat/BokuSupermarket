const express = require('express');
// import authentication middleware
const { protect } = require('../middleware/auth');

// import authorization middleware
const { authorize } = require('../middleware/role');

const router = express.Router(); 

// import the product controller
const productController = require('../Controllers/ProductController');

// define the routes
router.post('/createproduct', protect, authorize('superadmin'), productController.createProduct);
router.post('/createproductwithimage', protect, productController.createProductWithImage);

router.put('/updateproduct/:id', protect, authorize('storekeeper'), productController.updateProduct);

router.get('/getproductbyid/:id', protect, productController.getProductById);
router.get('/getallproducts', protect, productController.getAllProducts);

// export the router
module.exports = router;
