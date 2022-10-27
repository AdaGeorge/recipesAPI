//Tipos de datos de Sequelize
const {DataTypes} = require('sequelize')
//Base de Datos
const db = require('../utils/database')
const TypesIngredients = require('./types_ingredients.models')
//Tablas



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
        field: 'type_id',
        references: {
            key: id,
            model: TypesIngredients
        }
    },
    urlImg : {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'url_img'
    }
})

module.exports = Ingredients