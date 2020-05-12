// installed on node_modules folder
const colors  = require('colors');
const express = require('express');

// initializing the app
const app     = express();

// middleware
/*
  to write a middleware you simply
  need to write a function that accepts
  for parameters: err, req, res
  next, is a callback to the next 
*/
app.use((req, res, next) => {
  console.log(': Time: ', Date.now() + ' URL: ' + req.url);
  console.log('....................................'.white);
  next();
});

// the main route of our app
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// the main route of our app
app.get('/login', (req, res) => {
  res.send('Aqui va el login');
});

// the main route of our app
app.get('*', (req, res) => {
  res.send('error 404 - not found file');
});

// bootstraping the app
app.listen(3000, () => {
  console.log('|----------------------------------|'.red);
  console.log('|            Tech Labs26           |'.red);
  console.log('|----------------------------------|'.red);
  console.log('....................................'.blue);
  console.log(': Express app started on port 3000 :'.blue);
  console.log('....................................'.blue);
});