const { MongoClient } = require("mongodb");

class Database {
  constructor() {
    this.uri = "mongodb://127.0.0.1:27017/dbUsers";
    this.options = {};
    this.client = new MongoClient(this.uri, this.options);
  }

  async conectar() {
    try {
      await this.client.connect();
      console.log("Conexion con mongodb establecida");
    } catch (err) {
      console.error("Error al conectar a mongodb", err);
    }
  }

  desconectar() {
    try {
      this.client.close();
      console.log("Conexion a mongodb cerrada");
    } catch (error) {
      throw error;
    }
  }

  obtenerConexion(nombre) {
    return this.client.db().collection(nombre);
  }
}

module.exports = new Database();
