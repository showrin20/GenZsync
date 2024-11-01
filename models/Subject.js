// models/Subject.js
const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    status: { type: String, required: true },
    grade: { type: String, required: true },
    image: { type: String, required: true }
});

module.exports = mongoose.model('Subject', SubjectSchema);