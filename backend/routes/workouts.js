const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()
const { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout,
} = require('../controllers/workoutController')

//Get all workouts
router.get('/', getWorkouts)

//Get a single workout
router.get('/:id', getWorkout)

//Post a new workout
router.post('/', createWorkout)

// Delete a workout
router.delete('/:id', deleteWorkout)

// Update a workout
router.patch('/:id', updateWorkout)

module.exports = router