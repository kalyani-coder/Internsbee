const express = require('express');
const router = express.Router();
const StudentDetailsModel = require('../models/StudentsDetails'); // Adjust the path accordingly

// Define a GET route
router.get('/:studentId', async (req, res) => {
    try {
        const studentId = req.params.studentId;

        // Find the student details by ID
        const studentDetails = await StudentDetailsModel.findById(studentId);

        if (!studentDetails) {
            return res.status(404).json({ error: 'Student details not found' });
        }

        // Respond with the fetched data
        res.json(studentDetails);
    } catch (error) {
        console.error('Error fetching student details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;