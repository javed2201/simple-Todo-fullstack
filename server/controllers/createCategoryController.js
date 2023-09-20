const TaskMOdel = require('../models/TaskModel.js')
const CategoryModel = require('../models/CategoryModel.js')

const createCategoryController = (req, res)=>{
    const {name } = req.body
    let categoryCreate = new CategoryModel({name})
    categoryCreate.save()
    res.send(categoryCreate)
}

module.exports = createCategoryController