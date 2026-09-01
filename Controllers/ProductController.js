const Product = require('../Models/products'); 
const upload = require('../middleware/upload'); 

// creat a product
exports.createProduct = async (req, res) => {
  try {

    // check if all required fields are provided
     if (!req.body.name || !req.body.size || !req.body.description || !req.body.price || !req.body.quantity || !req.body.color) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const { name, size, description, price, quantity, color } = req.body;
   

    const product = new Product({ name, size, description, price, quantity, color });

    await product.save();
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'error creating product', error: error.message });
  }
};

// create a product with image upload
exports.createProductWithImage = async (req, res) => {
  try {
    // check if all required fields are provided
    if (!req.body.name || !req.body.size || !req.body.description || !req.body.price || !req.body.quantity || !req.body.color) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    upload.single('image')(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: 'Error uploading image', error: err.message });
      }
    });

    const { name, size, image, description, price, quantity, color } = req.body;

    // check if file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'please upload an image' });
    }

    const product = new Product({
      name,
      size,
      description,
      price,
      quantity,
      color,
      image: req.file.path // save the image path to the database
    });

    await product.save();
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }

};

// update a product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, size, description, price, quantity, color } = req.body;

    const product = await Product.findByIdAndUpdate(id, 
      {name, size, description, price, quantity, color }, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
      res.status(500).json({ message: 'Error updating product', error: error.message });
  }

};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if(!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product retrieved successfully', product});
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving product', error: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ message: 'Products retrieved successfully', products });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
};