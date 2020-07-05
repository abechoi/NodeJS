const express = require('express');
const morgan = require('morgan');
const moongoose = require('mongoose');
const Blog = require('./models/blog');

// connect to mongodb
// listen for requests
// mongodb+srv://[USERNAME]:[PASSWORD]@cluster0.eoe0p.mongodb.net/[DATABASE]?retryWrites=true&w=majority
const dbURI = 'mongodb+srv://[USERNAME]:[PASSWORD]@cluster0.eoe0p.mongodb.net/[DATABASE]?retryWrites=true&w=majority';
moongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {

    console.log('connected to db'); 
    app.listen(3000);

})
.catch((err) => console.log(err));

// express app
const app = express();

// register view engine using EJS - npm install ejs
app.set('view engine', 'ejs');

// middleware and static files via morgan
app.use(express.static('public'));

app.use(morgan('dev'));

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

app.get('/all-blogs', (req, res) => {
    Blog.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
});

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

// routes
app.get('/', (req, res) => {
   res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    //res.send('<p>about</p>');
    res.render('about', { title: 'About' })
});

// blog routes
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
    .then((result) => {
        res.render('index', { title: 'All Blogs', blogs: result });
    })
    .catch((err) => {
        console.log(err);
    });
});

// redirect
/*
app.get('/about-us', (req, res) => {
    res.redirect('./about');
});
*/

// 404 - place at the bottom as a catch all
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});