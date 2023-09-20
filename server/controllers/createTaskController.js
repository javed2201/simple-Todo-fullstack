const TaskMOdel = require('../models/TaskModel.js')

const createTaskController = (req, res)=>{
    const {taskName, description, projectedTime, category, importance, created } = req.body
    let taskCreate = new TaskMOdel({taskName, description, projectedTime, category, importance, created})
    taskCreate.save()
    res.send(taskCreate)
}

module.exports = createTaskController