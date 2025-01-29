const express = require("express");
const router = express.Router();
const z = require("zod");
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");

const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    role: z.string()
})

router.post("/signup", async (req, res) => {
    const body = req.body;

    //{success} returns an object or we can do obj.success
    const {success} = signUpSchema.safeParse(body);

    if(!success){
        res.status(411).json({
            message: "Incorrect Inputs"
        })
        return;
    }

    // check is user already exists in database or not 
    const existingUser = await User.findOne({
        email: body.username
    })
    if(existingUser){
        res.status(411).json({
            message: "User already exists"
        })
        return;
    }

    // putting in database new user
    const dbUser = await User.create(body);

    const userId = dbUser._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

});

const signInSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

router.post("/signin", async (req, res) => { 
    const body = req.body;
    const { success } = signInSchema.safeParse(body);

    if(!success){
        res.status(411).json({
            message: "Incorrect inputs"
        })
        return;
    }

    const dbUser = User.findOne({
        email: req.body.email,
        password: req.body.password
    });

    if(dbUser){
        const token = jwt.sign({
            userId: dbUser._id
        }, JWT_SECRET)
        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })

});

module.exports = router;