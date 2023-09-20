const express = require('express')
const app = express()
const cors = require('cors')
const dbConnection = require('./config/dbConnection.js')
const Routes = require('./routes/api/index.js')
const taskModel = require('./models/TaskModel.js')

app.use(express.json())
app.use(cors())

app.use(Routes) 
app.post('/deletetask', async (req, res)=>{
    const {id} = req.body
    const deleteTodo = await taskModel.findOneAndDelete({_id:id})
    res.send(deleteTodo)
})
dbConnection()
app.listen(8000, ()=>{
    console.log("connected") 
})