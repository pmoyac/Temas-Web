const Producto = require("../models/producto");

class ProductoDAO {
  constructor() {}

  async crear(productoData) {
    try {
      const producto = new Producto(productoData);
      return await producto.save();
    } catch (error) {
      throw error;
    }
  }

  async obtener(limit = 10) {
    try {
      return await Producto.find().limit(limit);
    } catch (error) {
      throw error;
    }
  }
  async obtenerPorId(idProducto) {
    try {
      return await Producto.findById(idProducto);
    } catch (error) {
      throw error;
    }
  }
  async editar(idProducto, productoData) {
    try {
      return await Producto.findByIdAndUpdate(idProducto, productoData, {
        new: true,
      });
    } catch (error) {
      throw error;
    }
  }
  async eliminar(idProducto) {
    try {
      return await Producto.findByIdAndDelete(idProducto);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProductoDAO();
