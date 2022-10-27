const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Instuctions = db.define('instructions', {
    id : {
        primaryKey: true, 
        type: DataTypes.UUID,
        allowNull: false
    },
    recipeId : {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'recipe_id'
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