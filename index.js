// installed on node_modules folder
const colors  = require('colors');
const express = require('express');
const morgan  = require('morgan');

    //require
    const myRoutes = require('./routes/myroutes.js');
    
// initializing the app
const app     = express();

app.set('appName','Tech xr8');
app.set('views', __dirname+'\\views');
app.set('view engine', 'ejs');

// middleware
/*
  to write a middleware you simply
  need to write a function that accepts
  for parameters: err, req, res
  next, is a callback to the next 
*/
/*
app.use((req, res, next) => {
  console.log(': Time: ', Date.now() + ' URL: ' + req.url);
  console.log('....................................'.white);
  next();
});
*/

//Update
app.use(morgan('dev'));

        //Router
        app.use(myRoutes);

// bootstraping the app
app.listen(3000, () => {
  console.log('|----------------------------------|'.red);
  console.log('|             '.red+app.get('appName')+'             |'.red);
  console.log('|----------------------------------|'.red);
  console.log('....................................'.blue);
  console.log(': Express app started on port 3000 :'.blue);
  console.log('....................................'.blue);
});