const express = require('express');
const { createTask, updateTask } = require('./types.js');
const { todo } = require('./db');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ message: "Validation with Zod 👊" });
})

app.post('/todo', async (req, res) =>{
    const createPayload = req.body;
    const validationResult = createTask.safeParse(createPayload);
    if(!validationResult.success){
        res.status(411).json({ message: "Validation"})
        return;
    }
    //puting in mongoose
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,  //default value is false when new task is created  //you can add logic to update this based on your requirements.  For example, you can create a new field in the database to store the date when the task is completed.  Then, update this field when you mark a task as completed.  You can also add logic to mark a task as completed when it is created.  You can also add logic to mark a task as completed when a user
    })
    res.json({msg:"todo created"})
})
app.get('/todos', async (req,res) =>{
    const todos = await todo.find();
    res.json(todos)
})

app.put('/completed', async (req, res) => {
    const updateTaskValidation = req.body;
    const validationResult = updateTaskValidation.safeParse(updateTask);
    if(!validationResult.success){
        res.status(411).json({ message: "Validation"})
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true,  
    })
    res.json({msg:"Task completed"})
})









app.delete('/delete', (req, res) => {

})
app.listen(3000, ()=>{
    console.log("Backend server is running on port 3000")
});