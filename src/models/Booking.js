/**
 * Model to Bookings.
 */

 //imports
const mongoose = require('mongoose');

/**
 * Mongoose Schema to Bookings
 * Itś a data base structure to mongodb server.
 */
const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

module.exports = mongoose.model('Booking', BookingSchema);
