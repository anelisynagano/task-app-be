const express = require("express");
const router = express.Router();

const tasks = [
  { id: 1, description: "wash dishes" },
  { id: 2, description: "wash dog" },
  { id: 3, description: "buy dishes" },
];

router.get("/", (req, res) => {
  res.send(tasks);
});

router.post("/", (req, res) => {
  tasks.push({ id: tasks.length + 1, ...req.body });
  res.send(req.body);
});

module.exports = router;
