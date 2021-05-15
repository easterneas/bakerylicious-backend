'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category)
      this.hasMany(models.TransactionDetails)
    }
  };
  Product.init({
    CategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
        key: 'id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    photos: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};