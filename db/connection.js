let mysql = require('mysql2'),
    Sequlize = require('sequelize')

let sequelize = new Sequlize('hotelphilmore','root','',{
    host:'localhost',
    dialect:'mysql'


})

sequelize.authenticate().then(()=>console.log('Connected Successfully'))
.catch(()=> console.log('Trouble connecting to Mysql server'))

module.exports = sequelize




