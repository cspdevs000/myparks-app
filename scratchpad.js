const axios = require('axios');
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

let parkData = axios.get('https://developer.nps.gov/api/v1/parks?&api_key=H3HVNxmSbQNtQ6K9ek1o4qYpSJ27A8VaEiOAN32q').then (resp => {
        // console.log(resp.data);
        console.log(resp.data.data[1].fullName);
        console.log(resp.data.data[1].designation);
        console.log(resp.data.data[1].description);
        console.log(resp.data.data[1].operatingHours);
        console.log(resp.data.data[1].weatherInfo);
        console.log(resp.data.data[1].images);
        return resp.data.data[1].fullName;
});

console.log(parkData);

// module.exports = {
//     parkData
// }
