// models/Pet.js

const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: String,
    breed: String,
    age: Number,
    price: Number,
    image: String,
});

module.exports = mongoose.model('Pet', PetSchema);
