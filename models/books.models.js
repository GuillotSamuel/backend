/* const Rating = require("./ratings.models")(sequelize, DataTypes);

module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define(
    "works",
    {
      id: {
        type: Datatypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      averageRating: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  Books.hasMany(Rating, { as: "ratings" });
  Rating.belongsTo(Books);

  return Books;
}; */

const mongoose = require('mongoose');
const { Schema } = mongoose;



const RatingSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  grade: { type: Number, required: true }
});

const BookSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  imageUrl: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
  ratings: [RatingSchema]
});
const Book = mongoose.model('Book', BookSchema);


module.exports = { Book };
