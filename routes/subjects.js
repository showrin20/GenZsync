// routes/subjects.js
const express = require('express');
const Subject = require('../models/Subject');
const router = express.Router();

// Get all subjects
router.get('/', async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.json(subjects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new subject
router.post('/', async (req, res) => {
    const subject = new Subject({
        title: req.body.title,
        status: req.body.status,
        grade: req.body.grade,
        image: req.body.image
    });

    try {
        const newSubject = await subject.save();
        res.status(201).json(newSubject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;