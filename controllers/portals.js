const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");
const { User, Park } = require('../models');

router.get('/home', function (req, res) {
    Park.findAll()
        .then(function (parkList) {
            // console.log('found all parks', parkList);
            res.render('portals/home', { parks: parkList });
        })
        .catch(function (err) {
            console.log('error', err);
            res.json({ message: 'Error occurrd, try again' });
        })
});

router.get('/parks', function (req, res) {
    Park.findAll()
        .then(function (parkList) {
            // console.log('found all parks', parkList);
            res.render('portals/index', { parks: parkList });
        })
        .catch(function (err) {
            console.log('error', err);
            res.json({ message: 'Error occurrd, try again' });
        })
});

router.get('/park/:id', function (req, res) {
    // console.log('PARAMS', req.params); //test
    let parkIndex = Number(req.params.id);
    // console.log('is this num', parkIndex);
    Park.findByPk(parkIndex)
        .then(function (park) {
            if (park) {
                let parkIndex = park.toJSON().parkId;
                Park.findByPk(parkIndex)
                    .then(function (artist) {
                        park = park.toJSON();
                        // console.log('is this park', park);
                        res.render('portals/park', { park });
                    })
            } else {
                console.log('This park does not exist');
                //render 404
                res.render('404', { message: 'Park does not exist' });
            }
        })
        .catch(function (err) {
            console.log('error', err);
            // res.json({ message: 'Error, Park does not exist' });
        });
});

module.exports = router;