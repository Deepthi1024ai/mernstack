const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Default route - Login form
app.get("/", (req, res) => {
  res.send(`
    <h2>Login Page</h2>
    <form method="POST" action="/login">
      Username: <input type="text" name="username" /><br><br>
      Password: <input type="password" name="password" /><br><br>
      <button type="submit">Login</button>
    </form>
  `);
});

// Handle Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    res.send(`<h2>Welcome ${username} 🎉</h2>`);
  } else {
    res.send(`<h2>Invalid Credentials ❌</h2>`);
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
