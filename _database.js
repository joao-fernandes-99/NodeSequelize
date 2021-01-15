const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    host: 'localhost',
    database: 'postgres',
    username: 'postgres',
    password: 1234,
    dialect: 'postgres',
    port: 5432,
    logging: true

});

module.exports = sequelize

async function teste(){
    try{
        let result = await sequelize.authenticate()
        console.log('Sequelize realizou a conexão com o DB com sucesso')


    }catch(err){
        console.log('Error: ' + err)

    }
}

teste()