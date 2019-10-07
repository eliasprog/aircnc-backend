/**
 * Model to Users.
 */

 //imports
const mongoose = require('mongoose');

/**
 * Mongoose Schema to Users
 * Itś a data base structure to mongodb server.
 */
const UserSchema = new mongoose.Schema({
    email: String,
});

module.exports = mongoose.model('User', UserSchema);
