const Product = require('../models/Product');

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const formattedProducts = products.map(product => ({
      id: product._id,
      nombre: product.nombre,
      precio: product.precio,
      currentStock: product.currentStock,
      minStock: product.minStock,
    }));
    res.status(200).json(formattedProducts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
  const { nombre, precio, currentStock, minStock } = req.body;
  const product = new Product({ nombre, precio, currentStock, minStock });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add stock to a product
exports.addStock = async (req, res) => {
  const { amount } = req.body;
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    product.currentStock += amount;
    await product.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Remove stock from a product
exports.removeStock = async (req, res) => {
  const { amount } = req.body;
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    if (amount > product.currentStock) {
      return res.status(400).json({ message: 'No se puede eliminar más stock del existente' });
    }
    product.currentStock -= amount;
    await product.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


