
const db = require('../sqldb');
const Course = db.Course;
const Comment = db.Comment;

module.exports.getAll = function(req, res){
	return Course.findAll({}).then(function(result){
		// res.send(result);
		res.render('courses',{
			courses: result});
	}).catch(function(err){
		console.log("错误"+err);
	})

	
 };

 module.exports.singleCourse = function(req, res){
	var courseid = req.query.courseid;
	return Course.findOne({
		where: {
			courseId: courseid
		  }
	}).then(function(result){
		Comment.findAll({
			where: {
				id: courseid,
				category: 'course'
			  }
		}).then(function(c){
			res.render('singleCourse',{
				comments: c,
				singleCourse: result});
		})
		
	})
	
}

module.exports.createComment = function(req, res){
	var id = req.query.courseid;
	createComments(req,function(){res.redirect('/singleCourse?courseid='+id);
});
	
}
function createComments(request, c){
	var commentName = request.body.name;
	var commentContent = request.body.comment;
	var id = request.query.courseid;
	var commentTime = (new Date()).toISOString().slice(0, 19).replace("T", " ");

	Comment.create({
		id: id,
		content: commentContent,
		time: commentTime,
		category: 'course',
		author: commentName,
	})
	c();
}

module.exports.searchCourse = function(req, res){
	var courseName = req.body.coursename;
	return Course.findAll({
		where: {
			courseName: courseName
		  }
	}).then(function(result){
		res.send(result);
	}).catch(function(err){
		console.log("错误"+err);
	})

}
