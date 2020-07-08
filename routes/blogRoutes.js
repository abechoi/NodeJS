const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();
// BLOG ROUTES
// localhost:3000/blogs GET
router.get('/', blogController.blog_index);

// localhost:3000/blogs POST
router.post('/', blogController.blog_create_post);

// localhost:3000/blogs/create GET
router.get('/create', blogController.blog_create_get);

// localhost:3000/blogs/:id GET
router.get('/:id', blogController.blog_details);

// localhost:3000/blogs/:id DELETE
router.delete('/:id', blogController.blog_delete);

module.exports = router;

/*
// mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
});

// Return All Blogs
app.get('/all-blogs', (req, res) => {
    Blog.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
});

// Return Blog By ID
app.get('/single-blog', (req, res) => {
    Blog.findById('5f0262f843ab1336c8a836ed')
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
});
*/