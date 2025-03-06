const { ObjectId } = require("mongodb");
const db = require("../config/db");

class UserDAO {
  constructor() {
    this.collection = db.obtenerConexion("users");
  }

  async crear(usuario) {
    try {
      const result = await this.collection.insertOne(usuario);
      return result.insertedId;
    } catch (error) {
      console.error(error);
    }
  }

  async obtener() {
    try {
        const usuarios = await this.collection.find().toArray();
        return usuarios;
    } catch (error) {
        console.error(error);
    }
  }

  async obtenerPorId(id) {
    try {
        const usuario = await this.collection.findOne({_id: new ObjectId(id)});
        return usuario;
    } catch (error) {
        console.error(error);
    }
  }

  async actualizar(id, usuarionuevo) {
    try {
        await this.collection.updateOne({_id: new ObjectId(id)}, {$set: usuarionuevo});
        return 'Ususario actualizado con exito';
    } catch (error) {
        console.error(error);
    }
  }

  async eliminarPorId(id){
    try {
        const result = await this.collection.deleteOne({_id: new ObjectId(id)});
        return result;
    }catch(error){
        console.error(error);
    }
  }
}

module.exports = new UserDAO();
