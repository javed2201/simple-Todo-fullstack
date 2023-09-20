import { useEffect, useState } from 'react'
import axios from 'axios'
import {AiFillDelete} from 'react-icons/ai'
import {MdPublishedWithChanges} from 'react-icons/md'
// http://localhost:8000/createtask (taskName, description, projectedTime, category, importance, created)
// http://localhost:8000/alltask
// http://localhost:8000/singletask/:id
// http://localhost:8000/createcategory (name)
// http://localhost:8000/allcategory
// http://localhost:8000/singlecategory/:id
// http://localhost:8000/deletetask

function App() {

  let [taskList, setTaskList] = useState([]) 
  let [categoryList, setCategoryList] = useState([])
  let [createTask, setCreateTask] = useState(false)
  let [taskNameText, setTaskNameText] = useState("")
  let [descriptionText, setDescriptionText] = useState("")
  let [projectedTimeText, setProjectedTimeText] = useState("")
  let [categoryText, setCategoryText] = useState("") 
  let [importanceText, setimportanceText] = useState("")
  let [createTaskError, setCreateTaskError] = useState("")
  let [notEffectChange, setNotEffectChange] = useState(false)
  let [createCategory, setCreateCategory] = useState(false)
  let [newCategoryText, setNewCategoryText] = useState("")
  
  let handleCreate = ()=>{
    setCreateTask(!createTask)
  }

  let handleCreateTaskSubmit = async ()=>{
    if(taskNameText&&descriptionText&&projectedTimeText&&categoryText&&importanceText){
      await axios.post('http://localhost:8000/createtask', {taskName:taskNameText, description:descriptionText, projectedTime:projectedTimeText, category:categoryText, importance:importanceText})
    } else{
      setCreateTaskError('please fill all fields')
    }
    setNotEffectChange(!notEffectChange)
    setCreateTask(!createTask)
  }

  useEffect(()=>{
    async function allTask(){
      let data = await axios.get('http://localhost:8000/alltask')
      setTaskList(data.data)
    }
    allTask()

    async function allcategory(){
      let data = await axios.get('http://localhost:8000/allcategory')
      setCategoryList(data.data)
    }
    allcategory()
  },[notEffectChange])
  
  let handleDeleteTask = (item)=>{
    async function deleteTask(){
      await axios.post('http://localhost:8000/deletetask', {id: item._id})
    }
    deleteTask()
    setNotEffectChange(!notEffectChange)
  }

  let handleupdateTask = (item)=>{
    console.log(item)
  }

  let handleCreateCategory = ()=>{
    async function createNewCategory(){
      await axios.post('http://localhost:8000/createcategory', {name: newCategoryText})
    }
    createNewCategory()
    setCreateCategory(false)
    setNotEffectChange(!notEffectChange)
  }

  return (
    <>

  <div class="todo-container">
    <h1>Todo List</h1>
    
    {taskList.map((item, index)=>(
      <div class="todo-item">
      <span class="task-name">{item.taskName}</span>
      <div class="task-category">Category: {item.category.name}</div>
      <div class="task-importance">Importance: {item.importance}</div>
      <div class="task-desc">{item.description}</div>
      <div class="task-date">Due date: {item.projectedTime}</div>
      <button onClick={()=>handleDeleteTask(item)} title='delete this task' class="delete-task"><AiFillDelete /></button>
      <button onClick={()=>handleupdateTask(item)} title='update this task' class="update-task"><MdPublishedWithChanges /></button>
      </div>
      ))}
    
    <button onClick={handleCreate} class="new-task-submit">Create Task</button>
    {/* <form class="new-task-form"> */}
    {createTask&&
      <div className={createTask?"block":"hidden"}>
        Name: <input onChange={(e)=>setTaskNameText(e.target.value)} type="text" class="new-task-input" placeholder="Enter task name" /> <br/>
        Description: <input onChange={(e)=>setDescriptionText(e.target.value)} type="text" class="new-task-input" placeholder="Enter description" /> <br/>
        Projected Time:<input onChange={(e)=>setProjectedTimeText(e.target.value)} type="date" class="new-task-input" placeholder="Enter projected time" /> <br/>
        select a category:
        <select onChange={(e)=>setCategoryText(e.target.value)} class="new-task-input">
          {categoryList.map(item=>(
            <option value={item._id} >{item.name}</option>
          ))}
        </select> {createCategory?<div><button onClick={handleCreateCategory} class="new-task-create">sumbit Category</button></div>
        :<button onClick={()=>setCreateCategory(true)} class="new-task-submit">Create Category</button>}   
        {createCategory&&<input onChange={(e)=>setNewCategoryText(e.target.value)} type="text" class="new-task-input" placeholder="Enter Category name" />} <br/>
        importance: <select onChange={(e)=>setimportanceText(e.target.value)} class="new-task-input"><option>medium</option><option>high</option><option>low</option></select> <br/>
        <button onClick={handleCreateTaskSubmit} type="submit" class="new-task-submit">submit</button>
        {createTaskError&&<h1>{createTaskError}</h1>}
      </div>
      }
    {/* </form> */}
  </div>
      
    </>
  )
}

export default App

{/* <h1 className="text-red-500 text-xl">All Tasks</h1> 
      <ul>
      {taskList.map((item, index)=>(
        <li>
          <span>{index+1} | </span> 
          <span className='font-bold ml-2 mr-3'>{item.taskName}</span> 
          <span className='ml-2 mr-3'>{item.description}</span>
          <span className='text-blue-600 ml-2 mr-3'>{item.category.name}</span>
          <span className='text-green-600 ml-2 mr-3'>{item.projectedTime}</span>
          <span className='text-red-600 ml-2 mr-3'>{item.importance}</span>
        </li>
        ))}
      </ul>   */}