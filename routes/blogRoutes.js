const express = require('express');
const { createBlog, getBlogs, deleteBlog, getBlogById } = require('../controllers/blogController');
const { protect } = require('../middlewares/authMiddleware');
const { editBlog } = require('../controllers/blogController');
const router = express.Router();

// only can customer create 
router.post('/', protect, createBlog);

// get all blogs
router.get('/',protect, getBlogs);
// get by id 
router.get('/:id',protect, getBlogById);

// delete blog

router.delete('/:id', protect, deleteBlog);
// edit blog
router.put('/:id', protect, editBlog);


module.exports = router;
