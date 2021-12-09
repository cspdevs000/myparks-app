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
    Park.findAll()
        .then(function (parkList) {
            // console.log('found all parks', parkList);
            res.render('portals/myparks', { parks: parkList });
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
    let parkIndex = req.park.fullName;
    // console.log('what am i looking at', Park.id);
    // const parkId = Park.findByPk(parkIndex);
    console.log("is this park", parkIndex);
    // const userId = User.findOne( )
    // Park.findOne({
    //     where : { id: id }
    // })
    //     .then(function (parkFound) {
    //         console.log('FOUND PARK', parkFound.toJSON());
    //         parkFound.createMyPark({
    //             parkId: Number(req.body.id),
    //             userId: Number(User.id),
    //         })
    //             .then(function (newMyPark) {
    //                 newMyPark = newMyPark.toJSON();
    //                 console.log('NEW MyPark', newMyPark);
    //                 res.redirect(`/portals/myparks`);
    //             })
    //             .catch(function (err) {
    //                 console.log('error', err);
    //             })
    //     })
    //     .catch(function (err) {
    //         console.log('ERROR', err);
    //     });
});






// router.post('/', isLoggedIn, async (req, res) => {
//     const user = await db.user.findOne({where:{id:req.user.id}});
//     const
// })

module.exports = router;