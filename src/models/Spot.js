/**
 * Model to Spots.
 */

 //imports
const mongoose = require('mongoose');

/**
 * Mongoose Schema to Spots
 * Itś a data base structure to mongodb server.
 */
const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Spot', SpotSchema);
