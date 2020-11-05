const express = require("express");

const Router = require("./resipes/resipe-router");

const server = express();

server.use(express.json());
server.use("/api/resipes", Router);

module.exports = server;
