const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");
// const isLoggedIn = require('./middleware/isLoggedIn');
const { User, Park } = require('../models');

router.get('/home', function (req, res) {
    Park.findAll()
        .then(function (parkList) {
            console.log('found all parks', parkList);
            res.render('portals/home', { parks: parkList });
        })
        .catch(function (err) {
            console.log('error', err);
            res.json({ message: 'Error occurrd, try again' });
        })
});

module.exports = router;