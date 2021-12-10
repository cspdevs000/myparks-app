const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");
const db = require('../models');
const { User, Park, MyPark } = require('../models');

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

router.get('/myparks', function (req, res) {
    MyPark.findAll({
        where: { userId:req.user.id }
    })
        .then( async function (myParkList) {
            console.log('found myParks', myParkList);
                //todo - loop thru myParkList
                let arr = [];
                for (let i = 0; i < myParkList.length; i++) {
                    let myPark = myParkList[i];
                    console.log(myPark.parkId);
                arr.push( await Park.findByPk(myPark.parkId));
                }
                console.log(arr);
            res.render('portals/myparks', { myPark : arr });
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


router.post('/myparks', function (req, res) {
    // let parkIndex = req.body.id;
    // console.log("is this park", parkIndex);
    // let userIndex = req.user.id;
    // console.log("user id is", userIndex);
    MyPark.create({
        userId: Number(req.user.id),
        parkId: Number(req.body.id)
    })
    .then(function(newMyPark) {
        newMyPark = newMyPark.toJSON();
        console.log('new MyPark', newMyPark);
        res.redirect('/myparks');
    })
    .catch(function(error) {
        console.log('error', error);
    })
});

router.delete('/myparks', function (req, res) {
    let user = Number(req.user.get().id);
    console.log("rqqqqq", user);
    let park = Number(req.body.myParksId);
    console.log("rqqqqq", park);
    MyPark.destroy({ where: { userId: user, parkId: park } })
        .then(function (response) {
            console.log('myPark deleted', response);
            res.redirect('/myparks');
        })
        .catch(function (error) {
            console.log('error', error);
            res.render('404', { message: 'Thingy was not deleted' });
        })
});

module.exports = router;