const express = require("express");
const { connectDB } = require("./config/db");
const todo = require("./routes/todo");
const cors = require('cors')

const app = express();

//connect Database
connectDB();

app.use(cors());

app.use(express.json({ extended: false }));
app.get("/", (req, res) => {
  res.send("Server is up and running");
});

app.use("/api/todo", todo);

//setting up port

PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
