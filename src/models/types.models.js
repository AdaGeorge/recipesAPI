const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Types = db.define('types', {
    id : {
        primaryKey: true, 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name : {
        type: DataTypes.STRING(60),
        allowNull: false
    }
})

module.exports = Types