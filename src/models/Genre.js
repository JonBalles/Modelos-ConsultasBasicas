module.exports = (sequelize, dataTypes) => {


    const config =  {
        tableName: "genres",
        timestamps: false
    }
    const Genre = sequelize.define('Genres', {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: dataTypes.STRING(),
            allowNull: false,
        },
        ranking: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false, 
        },
        active:{
            type: dataTypes.BOOLEAN,
            allowNull: false,
        }
    },
    config)

   

    return Genre

}