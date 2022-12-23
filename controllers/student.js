const express = require('express');
const mongoose = require('mongoose');
const Student = require('../models/student');

// get-All-Students
const getAllStudents = () => {

}
// update-Student-by-rollNo
const updateStudentByRollNo = () => {

}
// delete-Student-By-rollNo
const deleteStudentByRollNo = () => {

}
// get-Student-by-rollNo
const getStudentByRollNo = () => {

}
// create-Student
const createStudent = async (req, res) => {
    try {
        const { name, rollNo, registration, subjects, registrationOn } = req.body;
        const newStudent = await new Student({
            name, rollNo, registration, subjects, registrationOn
        });
        newStudent.save();

        res.status(200).json({
            status: 200,
            message: "New Student Successfully Created",
            data: [newStudent]
        })

        console.log("Create API is Successfully Running")
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: `Unexpected Error : ${error}`,
        })
    }
}


module.exports = {
    getAllStudents, updateStudentByRollNo, deleteStudentByRollNo, getStudentByRollNo, createStudent
}