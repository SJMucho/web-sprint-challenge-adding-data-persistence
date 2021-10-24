// build your server here and require it from index.js
const express = require("express");
const helmet = require("helmet");
const server = express();
const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");

server.use(express.json());
server.use(helmet());
server.use("./api", projectRouter, resourceRouter);

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
