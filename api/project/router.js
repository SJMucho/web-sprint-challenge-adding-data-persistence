// build your `/api/projects` router here
const express = require("express");
const router = express.Router();
const Projects = require("./model");

router.get("/projects", (req, res) => {
  Projects.getProject(req.query)
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error retrieving projects" });
    });
});

router.post("/projects", (req, res) => {
  Projects.createProject(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({
        message: `Error adding project`,
      });
    });
});

module.exports = router;
