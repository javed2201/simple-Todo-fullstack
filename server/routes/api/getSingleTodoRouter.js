const express  = require('express')
const _ = express.Router()
const getSingleTaskController = require('../../controllers/getSingleTaskControoler.js')

_.get('/:id', getSingleTaskController) 


module.exports = _