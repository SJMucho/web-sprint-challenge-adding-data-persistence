// build your `/api/resources` router here - NEW SPRINT
const express = require("express"); 
const router = express.Router();
const Resources = require("./model");

router.get("/resources", (req, res) => {
  Resources.getResource(req.query)
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error retrieving resources" });
    });
});

router.post("/resources", (req, res) => {
  Resources.createResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({
        message: `Error adding resource`,
      });
    });
});

module.exports = router;
