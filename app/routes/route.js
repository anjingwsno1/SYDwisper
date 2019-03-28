var express = require('express');
var router = express.Router();
var course_controller = require('../controllers/course.controller.js');
var blog_controller = require('../controllers/blog.controller.js');

/* GET home page. */
router.get('/', (request, response) => {
    response.render('index');
});
router.get('/courses', course_controller.getAll);
router.post('/searchCourse', course_controller.searchCourse);
router.post('/searchBlog', blog_controller.searchBlog);
router.get('/blogs', blog_controller.getAll);
router.post('/createBlog', blog_controller.createBlog);
router.get('/singleCourse', course_controller.singleCourse);
router.post('/createCourseComment', course_controller.createComment);
router.post('/createBlogComment', blog_controller.createComment);
router.get('/singleBlog', blog_controller.singleBlog);

module.exports = router;


