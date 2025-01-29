const mongoose = require("mongoose");
const { Schema } = require("zod");

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("connected to database"))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
        // trim in mongoose remove extra spaces from the starting and ending of the string
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        trim: true
    },
    isAdmin: {
        type: String,
        required: true,
        default: false
    },
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: "Task"
    }]
});


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    deadline: {
        type: Date,
        default: new Date()
    },
    priority: {
        type: String,
        default: "normal",
        enum: ["high", "medium", "normal", "low"]
    },
    by: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const User = mongoose.model('User', userSchema);
const Task = mongoose.model('Task',  taskSchema);
module.exports = {
    User,
    Task
};