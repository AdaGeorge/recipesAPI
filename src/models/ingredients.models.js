const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Ingredients = db.define('ingredients', {
    id : {
        primaryKey: true, 
        type: DataTypes.UUID,
        allowNull: false
    },
    name : {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    typeId : {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'type_id'
    },
    urlImg : {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'url_img'
    }
})

module.exports = Ingredients