const express = require('express');

// express app
const app = express();

// register view engine using EJS - npm install ejs
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi fins eggs', snippet: 'Yoshi fins eggsYoshi fins eggsYoshi fins eggs'},
        {title: 'Mario finds stars', snippet: 'Mario finds starsMario finds starsMario finds stars'},
        {title: 'How to defeat bowser', snippet: 'How to defeat bowserHow to defeat bowser'}
    ];
    //res.send('<p>home page</p>');
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    //res.send('<p>about</p>');
    res.render('about', { title: 'About' })
});

// redirect
/*
app.get('/about-us', (req, res) => {
    res.redirect('./about');
});
*/

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Creat a New Blog' });
});

// 404 - place at the bottom as a catch all
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});