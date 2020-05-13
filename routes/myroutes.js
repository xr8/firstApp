const express = require('express');
const router  = express.Router();

        // the main route of our app
        router.get('/', (req, res) => {
            res.render('index.ejs');
        });

        // the main route of our app
        router.get('/login', (req, res) => {
            res.render('login.ejs');
        });
        module.exports = router