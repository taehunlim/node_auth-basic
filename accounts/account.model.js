const mongoose = require('mongoose');
const role = require('_helper/role')

const Schema = mongoose.Schema;

const schema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true
        },
        passwordHash: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        acceptTerms: Boolean,
        role: {
            type: String,
            default: role.User
        },
        verificationToken: String,
        verified: Date,
        resetToken: {
            token: String,
            expires: Date
        },
        passwordReset: Date
    },
    {
        timeStamps : true
    }
)

module.exports = mongoose.model("account", schema)
