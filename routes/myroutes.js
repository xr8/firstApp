const express = require('express');
const router = express.Router();

        // the main route of our app
        router.get('/', (req, res) => {
            res.render('index.ejs');
        });

        // the main route of our app
        router.get('/login', (req, res) => {
            res.render('login.ejs');
        });

        // the main route of our app
        router.get('*', (req, res) => {
            res.send('error 404 - not found file');
        });
        
        module.exports = router