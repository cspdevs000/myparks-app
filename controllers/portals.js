const express = require('express');
const router = express.Router();
const passport = require("../config/ppConfig");
const isLoggedIn = require('../middleware/isLoggedIn');
const db = require('../models');
const { User, Park, MyPark, Memory, Text } = require('../models');

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

router.get('/myparks', isLoggedIn, function (req, res) {
    MyPark.findAll({
        where: { userId:req.user.id }
    })
        .then( async function (myParkList) {
            // console.log('found myParks', myParkList);
                //todo - loop thru myParkList
                let arr = [];
                for (let i = 0; i < myParkList.length; i++) {
                    let myPark = myParkList[i];
                    // console.log(myPark.parkId);
                arr.push( await Park.findByPk(myPark.parkId));
                }
                // console.log(arr);
            res.render('portals/myparks', { myPark: arr });
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

router.get('/memories/:id', isLoggedIn, function (req, res) {
        let parkIndex = Number(req.params.id);
        Park.findByPk(parkIndex)
            .then(function (park) {
                if (park) {
                    let parkIndex = park.toJSON().parkId;
                    Park.findByPk(parkIndex)
                        .then(function (memoryList) {
                            park = park.toJSON();
                            Text.findAll({
                                where: { userId:req.user.id }
                            })
                            .then( async function (textList) {
                                let arr = [];
                                for (let i = 0; i < textList.length; i++) {
                                    let text = textList[i];
                                    arr.push( await Text.findByPk(text.id));
                                }
                                res.render('portals/memories', { park, text:arr });
                            })
                        })
                } else {
                    console.log('This page does not exist');
                    res.render('404', { message: 'Page does not exist' });
                }
            })
            .catch(function (err) {
                console.log('error', err);
                res.json({ message: 'Error, Page does not exist' });
            });
});

router.get('/edit/:id', function (req, res) {
    // console.log('this is the id', req.params.id);
    let postIndex = Number(req.params.id);
    // console.log('HEREEEE', postIndex);
    Text.findByPk(postIndex)
        .then(function (text) {
            if (text) {
                text = text.toJSON();
                // console.log('is this text', text);
                res.render('portals/edit', { text });
            } else {
                // console.log('This post does not exist');
                res.render('404', { message: 'Post does not exist' });
            }
        })
        .catch(function (err) {
            console.log('error', err);
            // res.json({ message: 'Error, Album does not exist' });
        });
});

router.put('/', function (req, res) {
    // console.log('POST BODY', req.body.post);
    // console.log('here is id', req.params.id);
    // let postIndex = Number(req.params.id);
    Text.update({
        post: req.body.post,
    }, { where: { id: req.body.id } })
        .then(function (response) {
            console.log('after update', response);
            res.redirect('/myparks');
        })
        .catch(function (error) {
            console.log('error', error);
            res.render('404', { message: 'Update was not successful' })
        });
});

router.post('/home', function (req, res) {
    let chosenPark = req.body.searchList;
    // console.log("park CHOSEN", chosenPark);
    Park.findOne({
        where: { fullName:req.body.searchList }
    })
    .then(function (chosenPark) {
        // console.log('chosen PARK', chosenPark);
        let parkIndex = chosenPark.dataValues['id'];
        // console.log('id hopefully is', parkIndex);
        res.redirect('/park/' + parkIndex);
    })
    .catch(function (error) {
        console.log('error', error);
    })
});

router.post('/myparks', isLoggedIn, function (req, res) {
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

router.post('/memories/:id', isLoggedIn, function (req, res) {
    let parkIndex = req.body.id;
    console.log("is this park", parkIndex);
    let userIndex = req.user.id;
    console.log("user id is", userIndex);
    let textPost = req.body.uploadText;
    console.log("what is text", textPost);
    Text.create({
        userId: Number(req.user.id),
        parkId: Number(req.body.id),
        post: String(req.body.uploadText)
    })
    .then(function(newMemory) {
        newMemory = newMemory.toJSON();
        console.log('new Memory', newMemory);
        res.redirect('/myparks');
    })
    .catch(function(error) {
        console.log('error', error);
    })
});

// router.post('/memories/:id', isLoggedIn, function (req, res) {
//     let parkIndex = req.body.id;
//     console.log("is this park", parkIndex);
//     let userIndex = req.user.id;
//     console.log("user id is", userIndex);
//     let imageFile = req.body.uploadImage;
//     console.log("what is image", imageFile);
//     Memory.create({
//         userId: Number(req.user.id),
//         parkId: Number(req.body.id),
//         image: req.body.uploadImage
//     })
//     .then(function(newMemory) {
//         newMemory = newMemory.toJSON();
//         console.log('new Memory', newMemory);
//         res.redirect('/myparks');
//     })
//     .catch(function(error) {
//         console.log('error', error);
//     })
// });

router.delete('/myparks', function (req, res) {
    let user = Number(req.user.get().id);
    // console.log("rqqqqq", user);
    let park = Number(req.body.myParksId);
    // console.log("rqqqqq", park);
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

