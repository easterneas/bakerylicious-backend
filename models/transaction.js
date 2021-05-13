'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Customer)
      this.hasMany(models.TransactionDetails)
    }
  };
  Transaction.init({
    CustomerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Customers',
        key: 'id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    },
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};