'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyPark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.MyPark.belongsTo(models.User, { foreignkey: 'userId' });
      // models.MyPark.belongsTo(models.Park, { foreignkey: 'parkId' });
    }
  };
  MyPark.init({
    userId: DataTypes.INTEGER,
    parkId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MyPark',
  });
  return MyPark;
};