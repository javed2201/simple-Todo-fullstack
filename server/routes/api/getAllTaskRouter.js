const express  = require('express')
const _ = express.Router()
const getAllTaskController = require('../../controllers/getAllTaskController.js')

_.get('/', getAllTaskController) 


module.exports = _