'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { Transaction, Product } = models
      this.belongsTo(Transaction)
      this.belongsTo(Product)
    }
  };
  TransactionDetails.init({
    TransactionId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Transactions',
        key: 'id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    },
    ProductId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
        key: 'id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    },
    quantity: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TransactionDetails',
  });
  return TransactionDetails;
};