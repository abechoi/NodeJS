const express = require('express');
const morgan = require('morgan');
const moongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// connect to mongodb
// listen for requests
// mongodb+srv://[USERNAME]:[PASSWORD]@cluster0.eoe0p.mongodb.net/[DATABASE]?retryWrites=true&w=majority
const dbURI = 'mongodb+srv://[USERNAME]:[PASSWORD]@cluster0.eoe0p.mongodb.net/[DATABASE]?retryWrites=true&w=majority';
moongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {

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
app.use(express.urlencoded({ extended: true })); // without this: POST /blogs undefined
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
   res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    //res.send('<p>about</p>');
    res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);


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