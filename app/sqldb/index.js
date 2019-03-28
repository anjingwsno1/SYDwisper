var config = require('../config');
var Sequelize = require('sequelize');
var db = {
    sequelize:new Sequelize(config.sequelize.database,config.sequelize.username,config.sequelize.password,config.sequelize)
};
db.Course = db.sequelize.import('../models/course.js');
db.Blog = db.sequelize.import('../models/blog.js');
db.Comment = db.sequelize.import('../models/comment.js');

module.exports = db;