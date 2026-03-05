const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware
app.use(cookieParser());

app.use(session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: true
}));

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome! Go to /login to start session.");
});

// Login Route (Create Session)
app.get("/login", (req, res) => {
    req.session.username = "Kavitha";
    res.send("Session Created! Go to /profile");
});

// Profile Route (Check Session)
app.get("/profile", (req, res) => {
    if (req.session.username) {
        res.send("Hello " + req.session.username);
    } else {
        res.send("No session found. Please login first.");
    }
});

// Logout Route (Destroy Session)
app.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.send("Session Destroyed! Logged out successfully.");
    });
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
