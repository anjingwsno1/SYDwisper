module.exports = function(sequelize,DataTypes){
    var Comment = sequelize.define('comment',{
        id:{
            type:DataTypes.INTEGER(11),
            primaryKey:true,
            allowNull:false
		},
		content:{
            type:DataTypes.STRING(100),
            allowNull:false
		},
		time:{
            type:DataTypes.DATE,
            allowNull:false
		},
		category:{
            type:DataTypes.STRING(45),
            allowNull:false
        },
        author:{
            type:DataTypes.STRING(45),
            allowNull:false
        }
    });
    return Comment;
};