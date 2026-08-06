const product = require('../Models/products'); 

// creat a product
exports.createProduct = async (req, res) => {
  try {
    const { name, size, description, price, quantity, color } = req.body;

    const product = new Product({ name, size, description, price, quantity, color });

    await product.save();
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'error creating product', error: error.message });
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
  }
  catch (error) {
      res.status(500).json({ message: 'Error updating product', error: error.message });
  }

};