const express = require("express")
const mongoose = require("mongoose");
const app = express();
app.use(express.json()); // to read JSON data

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/mydb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Create Schema
const studentSchema = new mongoose.Schema({
     name: String,
     age: Number
});

// Create Model
const Student = mongoose.model("Student", studentSchema);

//===================== CRUD ====================
  
// CREATE
app.post("/add", async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.send("Student Added");

});

// READ
app.get("/student", async (req, res) => {
    const data = await Student.find();
    res.json(data);
});
