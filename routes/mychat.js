const express  = require('express');
const socketio = require('socket.io');

const router   = express.Router();

        // the main route of our app
        router.get('/chat', (req, res) => {
            res.render('chat.ejs');
        });
        
        module.exports = router