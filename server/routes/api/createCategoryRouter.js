const express  = require('express')
const _ = express.Router()
const createCategoryController = require('../../controllers/createCategoryController.js')

_.post('/', createCategoryController) 


module.exports = _