const db = require("./config/db");

const ProductoDAO = require("./dataAccces/productoDAO");
const VentaDAO = require("./dataAccces/ventaDAO");

async function main() {
  await db
    .connectar()
    .then(() => {
      console.log("conexion exitosa");
    })
    .catch((err) => {
      console.log(err);
    });

    //Pruebas

    const producto = await ProductoDAO.crear({nombre:'Galletas', precio: 19.90, cantidad: 10});
    console.log('produrcot agregado: ', producto);

    


    await db
    .desconectar()
    .then(() => {
      console.log("desconexion exitosa");
    })
    .catch((err) => {
      console.log(err);
    });

}

main();
