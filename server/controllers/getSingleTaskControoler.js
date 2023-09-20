const TaskMOdel = require('../models/TaskModel.js')

const getSingleTaskController = async (req, res)=>{
    const userid = req.params.id
    let findSingleTask = await TaskMOdel.findById({_id:userid})
    res.send(findSingleTask)
    console.log(findSingleTask)
}

module.exports = getSingleTaskController