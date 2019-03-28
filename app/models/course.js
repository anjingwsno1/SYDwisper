module.exports = function(sequelize,DataTypes){
    var Course = sequelize.define('course',{
        courseName:{
            type:DataTypes.STRING(45),
            primaryKey:true,
            allowNull:false
        },
        courseId:{
            type:DataTypes.INTEGER(11),
            primaryKey:true,
            allowNull:false
		},
		courseMajor:{
            type:DataTypes.STRING(45),
            primaryKey:true,
            allowNull:false
		},
		courseScore:{
            type:DataTypes.DOUBLE,
            primaryKey:true,
            allowNull:false
		},
		courseIntroduction:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
    return Course;
};