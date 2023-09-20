const express  = require('express')
const _ = express.Router()
const createTodorouter = require('./createTodoRouter.js')
const getAllTodo = require('./getAllTaskRouter.js')
const getSingleTodo = require('./getSingleTodoRouter.js')
const createCategoryRouter = require('./createCategoryRouter.js')
const getAllCategoryRouter = require('./getAllCategoryRouter.js')
const getSingleCategoryRouter = require('./getSingleCategoryRouter.js')

_.use('/createtask', createTodorouter)
_.use('/alltask', getAllTodo)
_.use('/singletask', getSingleTodo)
_.use('/createcategory', createCategoryRouter)
_.use('/allcategory', getAllCategoryRouter)
_.use('/singlecategory', getSingleCategoryRouter)

module.exports = _