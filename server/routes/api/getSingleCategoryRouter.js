const express  = require('express')
const _ = express.Router()
const getSingleCategoryController = require('../../controllers/getSingleCategoryController.js')

_.get('/:id', getSingleCategoryController) 


module.exports = _