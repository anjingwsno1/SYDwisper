module.exports = function(sequelize,DataTypes){
    var Blog = sequelize.define('blog',{
        blogId:{
            type:DataTypes.INTEGER(11),
            primaryKey:true,
            allowNull:false
        },
        blogAuthor:{
            type:DataTypes.STRING(45),
            allowNull:false
        },
        blogCategory:{
            type:DataTypes.STRING(45),
            allowNull:false
        },
        blogContent:{
            type:DataTypes.STRING,
            allowNull:false
        },
        blogTime:{
            type:DataTypes.DATE,
            allowNull:false
        },
        blogTitle:{
            type:DataTypes.STRING(45),
            allowNull:false
		}
    });
    return Blog;
};