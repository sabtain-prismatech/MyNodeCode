const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    rollNo: {
        type: String,
        required: true,
        unique: true,
    },
    registration: {
        type: String,
        required: true,
        unique: true,
    },
    subjects: {
        type: [String],
        required: true
    },
    registrationOn: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student 