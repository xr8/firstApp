// installed on node_modules folder
const colors  = require('colors');
const express = require('express');
const morgan  = require('morgan');

// initializing the app
const app     = express();

    //require
    const myRoutes = require('./routes/myroutes.js');
    const myApi    = require('./routes/myapi.js');

// settings
app.set('port', process.env.PORT || 3000);    
app.set('appName','Tech Labs26');
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
        app.use('/api',myApi);

        // the main route of our app
        app.get('*', (req, res) => {
          res.send('error 404 - not found file');
        });
      
// star the serever
const server = app.listen(app.get('port'), () => {
  console.log('|----------------------------------|'.red);
  console.log('|           '.red+app.get('appName')+'            |'.red);
  console.log('|----------------------------------|'.red);
  console.log('....................................'.blue);
  console.log(': Express app started on port 3000 :'.blue);
  console.log('....................................'.blue);
});
