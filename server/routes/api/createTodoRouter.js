const express  = require('express')
const _ = express.Router()
const createTaskController = require('../../controllers/createTaskController.js')

_.post('/', createTaskController) 


module.exports = _