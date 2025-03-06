const Venta = require("../models/venta");

class VentaDAO {
  constructor() {}

  async crear(ventaData) {
    try {
      const venta = new Venta(ventaData);
      return await venta.save();
    } catch (error) {
      throw error;
    }
  }

  async obtener(limit = 10) {
    try {
      return await Venta.find().limit(limit);
    } catch (error) {
      throw error;
    }
  }

  async obtenerPorId(idVenta) {
    try {
      return await Venta.findById(idVenta);
    } catch (error) {
      throw error;
    }
  }

  async eliminar(idVenta) {
    try {
      return await Venta.findByIdAndDelete(idVenta);
    } catch (error) {
      throw error;
    }
  }

  async editar(idVenta, ventaData) {
    try {
      return await Venta.findByIdAndUpdate(idVenta, ventaData, { new: true });
    } catch (error) {
      throw error;
    }
  }

  async agregarProductosVenta(idVenta, productos) {
    try {
      const venta = Venta.findById(idVenta);
      if (!venta) {
        throw new Error("Venta no encontrada");
      }

      venta.productoVenta.push(
        ...productos.map((producto) => ({
          idProducto: producto.idProducto,
          descripcion: producto.descripcion,
          precioVenta: producto.precioVenta,
          cantidad: producto.cantidadVendida,
          subtotal: producto.precioVenta * producto.cantidadVendida,
        }))
      );

      return await Venta.save();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new VentaDAO();
