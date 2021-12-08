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

// let parkData = axios.get('https://developer.nps.gov/api/v1/parks?&api_key=H3HVNxmSbQNtQ6K9ek1o4qYpSJ27A8VaEiOAN32q').then (resp => {
        // console.log(resp.data);
        // console.log(resp.data.data[0].fullName);
        // console.log(resp.data.data[0].designation);
        // console.log(resp.data.data[0].description);
        // console.log(resp.data.data[1].operatingHours);
        // console.log(resp.data.data[0].weatherInfo);
        // console.log(resp.data.data[0].images);
        // console.log(resp.data.data[1].entranceFees[0].cost);
        // return resp.data.data[1].fullName;
// });
// console.log(parkData);

Park.create({
    fullName: "Abraham Lincoln Birthplace National Historic Park",
    designation: "National Historical Park",
    description: "For over a century people from around the world have come to rural Central Kentucky to honor the humble beginnings of our 16th president, Abraham Lincoln.",
    weatherInfo: "There are four distinct seasons in Central Kentucky. However, temperature and weather conditions can vary widely within those seasons.",
    image: "https://www.nps.gov/common/uploads/structured_data/3C861078-1DD8-B71B-0B774A242EF6A706.jpg"
})
.then(function(newPark) {
    console.log('NEW PARK', newPark.toJSON());
})
.catch(function(error) {
    console.log('ERROR', error);
})

//says text string is too long, tried text as datatype cause supposedly unlimited but still doesn't work
// tried updating model to (1000) also doesn't work



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