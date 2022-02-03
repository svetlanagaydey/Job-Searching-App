const mongoose = require('mongoose')
const validator = require('validator')

const postingSchema = new mongoose.Schema({
    company: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        // unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    phone: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        // validate(value) {
        //     if (value.toLowerCase().includes('password')) {
        //         throw new Error('Password cannot contain "password"')
        //     }
        // }
    },
    date: {
        type: Date,
        default: Date.now
    },
    details: {
        title: {
            type: String,
            required: true,
            trim: true
        },
        profession: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        salary: {
            type: Number
        },
        skillsMust: {
            type: Array,
        },
        skillsNice: {
            type: Array,
        }
    }
})



const Posting = mongoose.model('Posting', postingSchema)
module.exports = Posting