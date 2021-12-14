'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('Parks', [{
    fullName: 'Arches National Park',
    designation: 'National Park',
    description: 'Visit Arches to discover a landscape of contrasting colors, land forms, and textures unlike any other in the world. The park has over 2,000 natural stone arches and hundreds of soaring pinnacles, massive rock fins, and giant balanced rocks.',
    weatherInfo: "Arches is part of the Colorado Plateau, a 'high desert' region that experiences wide temperature fluctuations, sometimes over 40 degrees in a single day.",
    image: 'https://www.nps.gov/common/uploads/structured_data/3C79850F-1DD8-B71B-0BC4A88BA85DE6B0.jpg',
    createdAt: new Date(),
    updatedAt: new Date()
   }])   
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
