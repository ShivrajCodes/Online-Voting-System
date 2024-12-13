// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the CORS package

// Initialize the app and set the port
const app = express();
const PORT = 3000;

// Middleware
app.use(cors({
  origin: 'http://127.0.0.1:5501', // Allow your frontend URL (replace with your frontend's URL if different)
  methods: ['GET', 'POST'], // Specify the allowed HTTP methods
  allowedHeaders: ['Content-Type'] // Allow the Content-Type header (needed for JSON requests)
}));

app.use(bodyParser.json()); // Parse JSON data in request bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data

// Route: Register endpoint
app.post("/register", (req, res) => {
  // Extract data from the request body
  const { username, email, password } = req.body;

  // Validate required fields
  if (!username || !email || !password) {
    return res.status(400).json({
      error: "All fields are required. Please provide username, email, and password.",
    });
  }

  // Simulate saving data to the database (for testing)
  console.log("User Registered Successfully:", { username, email, password });

  // Send a response to the client
  res.status(201).json({
    message: "Registration successful! Welcome aboard!",
    user: { username, email }, // Optional: send back the registered user details
  });
});

// Default route to check if the server is running
app.get("/", (req, res) => {
  res.send("Server is running! Access POST /register to test registration.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
