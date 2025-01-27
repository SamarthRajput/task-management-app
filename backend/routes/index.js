const express = require("express");
const app = express();

const userRouter = require("./user");
const tasksRouter = require("./tasks");

// we need a new router because all the api requests will start from /api/v1
const router = express.Router();
// any request coming to /api/v1/user will go here
router.use("/user", userRouter);

// any request coming to /api/v1/tasks will go here 
router.use("tasks", tasksRouter);

module.exports = router;