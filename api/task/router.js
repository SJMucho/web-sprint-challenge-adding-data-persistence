// build your `/api/tasks` router here
const express = require("express");
const router = express.Router();
const Tasks = require("./model");

router.get("/tasks", (req, res) => {
  Tasks.getTask(req.query)
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error retrieving tasks" });
    });
});

router.post("/tasks", (req, res) => {
  Tasks.createTask(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({
        message: `Error adding task`,
      });
    });
});

module.exports = router;
