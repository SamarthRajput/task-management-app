const mongoose = require("mongoose");

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
    }
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
        default: Date.now
    }
})

const User = mongoose.model('User', userSchema);
const Task = mongoose.model('Task',  taskSchema);
module.exports = {
    User,
    Task
};