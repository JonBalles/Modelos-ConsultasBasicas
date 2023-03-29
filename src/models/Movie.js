module.exports = (sequelize, dataTypes) => {

    const alias = "Movies"
    
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title:{
            type: dataTypes.STRING(),
            allowNull: false,
        },
        rating: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false, 
        },
        length: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false, 
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false, 
        }
    }
    
    
    const config =  {
        tableName: "movies",
        createdAt:"created_at",
        updatedAt:"updated_at"
    }


    const Movie = sequelize.define(alias, cols, config)

    return Movie

}