var   Chance  = require('chance');
const express = require('express');

const chance  = new Chance();
const router  = express.Router();

const myhash    = chance.string({length: 5,casing: 'upper',alpha: true}) + '-' +chance.string({length: 5,casing: 'upper',alpha: true}) + '-' +chance.string({length: 5,casing: 'upper',alpha: true}) + '-' +chance.string({length: 5,casing: 'upper',alpha: true}) + '-' +chance.string({length: 5,casing: 'upper',alpha: true})
var version   = '1.0.2';
        // the main route of our app
        router.get('/', (req, res) => {
            res.json({
             Tech   : 'Labs26',
             Hash   : myhash,
             Version: version   
            });
        });

        module.exports = router