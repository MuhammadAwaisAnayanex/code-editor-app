const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },

}, { timestamps: true })

const authModel = mongoose.model("Auth_Schema",authSchema)

module.exports = authModel;