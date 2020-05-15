// installed on node_modules folder
const path    = require('path');
const express = require('express');
const morgan  = require('morgan');
const colors  = require('colors');
const socketio = require('socket.io');

  // initializing the app
  const app     = express();
    
      //require
      const myRoutes = require('./routes/myroutes.js');
      const myApi    = require('./routes/myapi.js');
      const myChat   = require('./routes/mychat.js');

      //variables de entorno NODE_PORT
      app.set('port', process.env.PORT  || 3000);
      app.set('appName','Tech Labs26');
      app.set('views', __dirname + '/views');
      app.set('view engine', 'ejs');

      // settings
      app.use('/public', express.static(__dirname + '/public'));

      // middleware
      app.use(morgan('dev'));

          //Router
          app.use(myRoutes);
          app.use(myChat);
          app.use(myApi);

          //chat
          app.get('/nel', (req, res) => {
            res.send('Nel!');
          });

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
              console.log(': Express app started on port '.blue + app.get('port') + ' :'.blue);
              console.log('....................................'.blue);
            });

            const io = socketio(server);
            io.on('connection', (socketio) => {

              console.log('socket connection opened:', socketio.id);

                socketio.on('chat:message', (data) => {
                  io.sockets.emit('chat:message', data);
                  console.log(data);
                });
              
                socketio.on('chat:typing', (data) => {
                  socketio.broadcast.emit('chat:typing', data);
                });
            });       