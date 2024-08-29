const Blog = require('../models/Blog');

// create blog
const createBlog = async (req, res) => {
  const { title, content } = req.body;

  try {
    const newBlog = new Blog({ title, content, author: req.user.id });
    console.log("newBlog",newBlog)
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get  Blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'username');
    console.log("blogs Aee",blogs)

    res.json(blogs);
  } catch (err) {
    console.log("Debug in getBlogs",err )

    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
// get by id
const getBlogById = async (req, res) => {
  try {
    const blogs = await Blog.findById(req.params.id).populate('author', 'username');
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
// edit 
const editBlog = async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const blog = await Blog.findById(req.params.id);
  
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      if (blog.author.toString() !== req.user.id) {
        return res.status(403).json({ message: 'Unauthorized Not allowd' });
      }
  


      const updatedBlog = await Blog.findOneAndUpdate({_id:req.params.id},{
        title,
        content
      });
  
      res.json(updatedBlog);
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  };
  
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    if (blog.author.toString() !== req.user.id)
      return res.status(401).json({ message: 'Unauthorized' });

    await blog.deleteOne({
      _id:req.params.id
    });
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { createBlog, getBlogs, deleteBlog  , editBlog , getBlogById};
