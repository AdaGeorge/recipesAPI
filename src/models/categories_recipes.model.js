const {DataTypes} = require('sequelize')
const db = require('../utils/database')

const CategoriesRecipes = db.define('categories_recipes', {
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

module.exports = CategoriesRecipes