'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Park extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Park.init({
    fullName: DataTypes.STRING(1000),
    designation: DataTypes.STRING(1000),
    description: DataTypes.TEXT(10000),
    weatherInfo: DataTypes.TEXT(10000),
    image: DataTypes.STRING(1000)
  }, {
    sequelize,
    modelName: 'Park',
  });
  return Park;
};