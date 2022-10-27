//Tipos de datos de Sequelize
const {DataTypes} = require('sequelize')
//Base de Datos
const db = require('../utils/database')
//Tablas
const Recipes = require('./recipes.models')


const Instuctions = db.define('instructions', {
    id : {
        primaryKey: true, 
        type: DataTypes.UUID,
        allowNull: false
    },
    recipeId : {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'recipe_id',
        references: {
            key: id,
            model: Recipes
        }
    },
    step : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    urlImg : {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'url_img'
    },
    desciption : {
        type: DataTypes.TEXT
    },
})

module.exports = Instuctions