// build your server here and require it from index.js
const express = require("express");
const helmet = require("helmet");
const server = express();
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

server.use(express.json());
server.use(helmet());
server.use("/api", projectRouter, resourceRouter, taskRouter);

// server.use((err, req, res, next) => {
//   res.status(500).json({
//     message: err.message,
//     stack: err.stack,
//   });
// });

server.get("/", (req, res) => {
  res.send(`<h2>Sprint II<h2>`);
});

server.use("*", (req, res, next) => {
  res.status(404).json({ message: `${req.method} ${req.baseUrl} not found!` });
});

module.exports = server;
