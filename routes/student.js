const express = require('express');

const router = express.Router();

const {
    getAllStudents, updateStudentByRollNo, deleteStudentByRollNo, getStudentByRollNo, createStudent
} = require('../controllers/student');

// get-All-Students
router.post('/all', getAllStudents);

// get-Student-By-RollNo
router.post('/rollNo/:rollNo', getStudentByRollNo);

// Delete-Student-By-RollNo
router.post('/delete/rollNo/:rollNo', deleteStudentByRollNo);

// Update-Student-By-RollNo
router.post('/update/rollNo/:rollNo', updateStudentByRollNo);

// Create-Student-By-RollNo
router.post('/add', createStudent);

module.exports = router;