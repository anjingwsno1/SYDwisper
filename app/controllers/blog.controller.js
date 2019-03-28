const db = require('../sqldb');
const Blog = db.Blog;
const Comment = db.Comment;


module.exports.getAll = function(req, res){
    return Blog.findAll({}).then(function(result){
		// res.send(result);
		res.render('blog',{
			blogs: result});
	}).catch(function(err){
		console.log("错误"+err);
	})
    
}

module.exports.createBlog = function(req, res){
	Blog.findAll({
		order: [
			['blogId', 'DESC'],]
	}).then(function(result){
		var blogId = result[0].blogId+1;
		var blogTitle = req.body.title;
		var blogAuthor = req.body.author;
		var blogContent = req.body.content;
		var blogCategory = req.body.category;
		var blogTime = (new Date()).toISOString().slice(0, 19).replace("T", " ");
		console.log(blogTime);
		// Blog.create({
		// 	blogId: blogId,
		// 	blogAuthor: blogAuthor,
		// 	blogCategory: blogCategory,
		// 	blogContent: blogContent,
		// 	blogTime: blogTime,
		// 	blogTitle: blogTitle,
		// })
		res.redirect('blogs');
	})
	

}

module.exports.singleBlog = function(req, res){
	var blogid = req.query.blogid;
	return Blog.findOne({
		where: {
			blogId: blogid
		  }
	}).then(function(result){
		Comment.findAll({
			where: {
				id: blogid,
				category: 'blog'
			  }
		}).then(function(c){
			res.render('singleBlog',{
				comments: c,
				singleBlog: result});
		})
		
	})
	
}

module.exports.createComment = function(req, res){
	var id = req.query.blogid;
	createComments(req,function(){res.redirect('/singleBlog?blogid='+id);
});
	
}
function createComments(request, c){
	var commentName = request.body.name;
	var commentContent = request.body.comment;
	var id = request.query.blogid;
	var commentTime = (new Date()).toISOString().slice(0, 19).replace("T", " ");

	Comment.create({
		id: id,
		content: commentContent,
		time: commentTime,
		category: 'blog',
		author: commentName,
	})
	c();
}

module.exports.searchBlog = function(req, res){
	var blogName = req.body.blogname;
	return Blog.findAll({
		where: {
			blogTitle: blogName,
		}
	}).then(function(result){
		res.send({blogs: result});
	}).catch(function(err){
		console.log("错误"+err);
	})

}