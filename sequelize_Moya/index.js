const {Sequelize, DataTypes} = require ('sequelize');

const sequelize = new Sequelize('sequelize', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

(async () =>{
    // definir modelos
    const Usuario = sequelize.define('Usuario', {
        Nombre:{
            type: DataTypes.STRING(),
            allowNull: false
        },
        Apellido:{
            type: DataTypes.STRING(),
            allowNull: false
        }
    });

    const Pedido = sequelize.define('Pedido', {
        descripcion:{
            type: DataTypes.STRING,
            allowNull: false
        },
        cantidad:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precio:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        estado:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    Usuario.hasMany(Pedido);
    Pedido.belongsTo(Usuario);

    await sequelize.sync().then(()=>{
        console.log('Base de datos creada')
    }).catch(err=>{
        console.log(err)
    })

    try {
        // const Usuario1 = await Usuario.create({Nombre:'Pedro', Apellido:'Moya'});
        // const Usuario2 = await Usuario.create({Nombre:'Pedro2', Apellido:'Moya'});
        // const Usuario3 = await Usuario.create({Nombre:'Pedro3', Apellido:'Moya'});
        // const Usuario4 = await Usuario.create({Nombre:'Pedro4', Apellido:'Moya'});

        const Pedido1 = await Pedido.create({descripcion:'pedido', cantidad:2, precio:10, estado:'en curso'})
        const Pedido2 = await Pedido.create({descripcion:'pedido2', cantidad:2, precio:10, estado:'en curso'})
        const Pedido3 = await Pedido.create({descripcion:'pedido3', cantidad:2, precio:10, estado:'en curso'})
        const Pedido4 = await Pedido.create({descripcion:'pedido4', cantidad:2, precio:10, estado:'en curso'})

        const pedidoResult = await Pedido.findByPk(2);
        const usuarioResult = await Usuario.findByPk(1);

        await usuarioResult.addPedido(pedidoResult);

        const usuarios = await usuarioResult.findAll({include: Pedido});
        console.log(usuarios);

        const usuarioUpdate = await Usuario.findByPk(1);
        await usuarioUpdate.update({Nombre:'Antonio'});

        const pedidoDelete = await Pedido.findByPk(1);
        await pedidoDelete.destroy();

        //actualixar con where
        await Pedido.update({precio: 20}, {where: {id: 1}});

        //eliminar usuario con where
        await Usuario.destroy({where: {id: 1}});

        
    } catch (error) {
        console.error("Error al ejecutar las operaciones crud", error)
    }

})();