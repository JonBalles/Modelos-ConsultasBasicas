module.exports = (sequelize, dataTypes) => {


    const config =  {
        tableName: "actors",
        timestamps: false
    }
    const Actor = sequelize.define('Actors', {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name:{
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false, 
        },
        rating:{
            type: dataTypes.DECIMAL(3,1),
            allowNull: true,
        }
    },
    config)
    
    return Actor

}