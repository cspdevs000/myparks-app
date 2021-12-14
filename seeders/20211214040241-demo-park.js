'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('Parks', [{
    fullName: 'Badlands National Park',
    designation: 'National Park',
    description: 'The rugged beauty of the Badlands draws visitors from around the world. These striking geologic deposits contain one of the world’s richest fossil beds. Ancient horses and rhinos once roamed here.',
    weatherInfo: "The Badlands weather is variable and unpredictable with temperature extremes ranging from 116° F to -40° F. Summers are hot and dry with occasional violent thunderstorms.",
    image: 'https://www.nps.gov/common/uploads/structured_data/3C82EE63-1DD8-B71B-0BD6EE0FDCB5D402.jpg',
    createdAt: new Date(),
    updatedAt: new Date()
   }, {
    fullName: 'Big Bend National Park',
    designation: 'National Park',
    description: 'The night skies are dark as coal and rivers carve temple-like canyons in ancient limestone. Here, at the end of the road, hundreds of bird species take refuge in a solitary mountain range surrounded by weather-beaten desert.',
    weatherInfo: "Big Bend is a desert park, so be prepared for extreme conditions.",
    image: 'https://www.nps.gov/common/uploads/structured_data/8BF8356B-BB63-76A4-19F5296EF94C96B4.jpg',
    createdAt: new Date(),
    updatedAt: new Date()
   }
  
  ])   
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
