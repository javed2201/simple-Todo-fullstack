const express  = require('express')
const _ = express.Router()
const getAllCategoryController = require('../../controllers/getAllCategoryController')

_.get('/', getAllCategoryController) 


module.exports = _