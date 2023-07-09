module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "users",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  return Users;
};

/* 
const mongoose = require('mongoose');

const { Schema } = mongoose;


const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
 */