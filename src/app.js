const express = require("express");
require("./db/connection")
const Student = require("./Models/students")

const app = express();
const port = process.env.port || 3000

app.use(express.json())

// create a new students
app.post("/students",(req,res)=>{
    console.log(req.body)
    const user= new Student(req.body)
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })

    // res.send("Hello from the other sides");
})

app.listen(port,()=>{
    console.log("connetion is setup at ${}")
})
