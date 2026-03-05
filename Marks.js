const express = require("express");
const path = require("path");
const app = expess();

//Set EJS as template engine
app.set("view engine", "ejs");

//Optional: Set views folder manually
app.set("view", path.join(__dirname, "view"));

//Rite
app.get("/", (req, res) =>{
const user = "Kavitha";
const marks = 95;

res.render("home", {
name: user,
score: marks
});
});

//Start server
app.listen(3000, () =>{
console.log("Server running on http:localhost:3000");
});
