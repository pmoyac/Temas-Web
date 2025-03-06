const db = require('./config/db');
const userDAO = require('./dataAccess/userDAO');
const UserDAO = require('./dataAccess/userDAO');
const User = require('./models/users');

(async function () {
    await db.conectar();

    // const usuario1 = new User('Pedro', 'pmoyac@gmail.com');
    // const usuario2 = new User('Pedro1', 'pmoyac1@gmail.com');
    // const usuario3 = new User('Pedro2', 'pmoyac2@gmail.com');
    // const usuario4 = new User('Pedro3', 'pmoyac3@gmail.com');

    // await UserDAO.crear(usuario1);
    // await UserDAO.crear(usuario2);
    // await UserDAO.crear(usuario3);
    // await UserDAO.crear(usuario4);

    await userDAO.eliminarPorId('67c02f8f5a571ff0ad800bbb');

    console.log('Listado de usuario: ');
    const usuarios = await UserDAO.obtener();
    console.log(usuarios);

    db.desconectar();
}())