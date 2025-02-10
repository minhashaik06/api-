const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // Render provides PORT automatically

app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Hello, Render! Your API is live!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT} or on Render`);
});
