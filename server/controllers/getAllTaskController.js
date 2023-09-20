const TaskMOdel = require('../models/TaskModel.js')

const getAllTaskController = async (req, res)=>{
    let data = await TaskMOdel.find().populate('category') 
    res.send(data)
}

module.exports = getAllTaskController