const express = require('express');
const router = express.Router();
const AppController = require('../AppController');
const StudentsController = require('../StudentsController');

// Define the route for the root ("/") to the AppController
router.get('/', AppController.getHomepage);

// Define the routes for students
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
