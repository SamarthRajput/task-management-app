const express = require("express");
const { Task } = require("../db");
const router = express.Router();

const createTask = z.object({
    title: z.string().min(1),
    description: z.string().min(1)
})

// Create tasks endpoint
router.post("/create", async (req, res) => {
    const body = req.body;
    const { success } = createTask.safeParse(body);

    if(!success){
        res.status(411).json({
            message: "Incorrect inputs"
        })
        return;
    }

    // creating the task
    await Task.create({
        title: body.title,
        description: body.description,
        completed: false,
        deadline: new Date() + 7 
    })

    res.json({
        message: "Todo Created"
    })
});

// get all tasks endpoint
router.get("/tasks", async (req, res) => {
    const tasks = await Task.find({});

    res.json({
        tasks: tasks
    })
});

// put endpoint for marking a specific task completed
router.put("/completed/:id", async (req, res) => {
    const taskId = req.params.id;

    // update the task
    const updateTask = await Task.findByIdAndUpdate(taskId, {completed: true});

    res.json({
        message: "Task marked as completed"
    })
});

// Delete a task
router.delete("/delete/:id", async (req, res) => {
    const taskId = req.params.id;

    const deletedTask = await Task.findByIdAndDelete(taskId);
})

module.exports = router;