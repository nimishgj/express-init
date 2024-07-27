const express = require("express");

function createServer() {
  const app = express();
  app.use(express.json());

  app.get("/", (request, response) => {
    response.status(200).send("Server is UP and Running");
  });

  return app;
};

module.exports = { createServer };
