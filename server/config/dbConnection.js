const mongoose = require('mongoose')
function dbConnection(){
    mongoose.connect('mongodb+srv://todo:eFPIK4Ut8Odpnrmp@cluster0.utw4yqw.mongodb.net/todo?retryWrites=true&w=majority')
}
module.exports = dbConnection