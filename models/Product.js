const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  minStock: { type: Number, required: true },
  currentStock: { type: Number, default: 0 }
});

module.exports = mongoose.model('Product', productSchema);
