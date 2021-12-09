const axios = require('axios');
const { Park } = require("./models");
// const API_KEY = "xGU2Bbmq7Bcwi6Oss2t0NTu1igEG_QwrwrysCiHvuxg";

// const searchTerm = 'mexico';

// axios.get(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&&query=${searchTerm}`) // /users/:username/photos
// .then(response => {
//     // console.log(response.data);
//     const array = response.data.results;
//     for (let i = 0; i < array.length; i++) {
//         let photoObj = array[i];
//         let fullPhoto = photoObj.urls.full;
//         console.log(fullPhoto);
//     }
// });

// let parkData = axios.get('https://developer.nps.gov/api/v1/parks?start=450&api_key=F8jym7h6NP3G6wCttcxUotmRQ2ayjRWN06T2Xevg').then (resp => {
//         console.log(resp.data.data[14].fullName);
//         console.log(resp.data.data[14].designation);
//         console.log(resp.data.data[14].description);
//         console.log(resp.data.data[14].weatherInfo);
//         console.log(resp.data.data[14].images);
// });
// console.log(parkData);

// Park.create({
//     fullName: "Zion National Park",
//     designation: "National Park",
//     description: "Follow the paths where native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon.",
//     weatherInfo: "Zion is known for a wide range of weather conditions. Temperatures vary with changes in elevation and day/night temperatures may differ by over 30°F.",
//     image: "https://www.nps.gov/common/uploads/structured_data/3C7F04EA-1DD8-B71B-0BF8CE99D6958A0E.jpg"
// })
// .then(function(newPark) {
//     console.log('NEW PARK', newPark.toJSON());
// })
// .catch(function(error) {
//     console.log('ERROR', error);
// })


// module.exports = {
//     parkData
// }


//todo -- seed static data
        //set up index route(s) for the park pages
        //when user adds park to myParks, create new instance of the park w a myParks boolean of true
        //at new path, allow user to post memories (text and/or images) to be stored in db
        //suggest parks to visit that excludes already visited parks
        // style index and park pages
        // style memories page / make a feed type aspect for later social interaction
        // allow other users to see users visited parks etx