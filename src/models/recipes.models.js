const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Recipes = db.define('recipes', {
    id : {
        primaryKey: true, 
        type: DataTypes.UUID,
        allowNull: false
    },
    title : {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    description : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    urlImg : {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'url_img'
    },
    urlVideo: {
        type: DataTypes.STRING,
        field: 'url_video'
    },
    preparationTime: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'preparation_time'
    },
    portions: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId:{
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id'
    },
    origin: {
        type: DataTypes.STRING
    },
    likes:{
        type: DataTypes.INTEGER
    }
})

module.exports = Recipes