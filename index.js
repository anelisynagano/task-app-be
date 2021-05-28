const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasks-route");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from / route");
});

app.use("/tasks", tasksRouter);

app.listen(5000, () => console.log("server running on port 5000"));
