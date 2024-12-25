const express = require ("express");
const userRouter = require("./user.routes");
const repoRouter = require("./repo.routes");
const issueRouter = require("./issue.routes");

const mainRouter = express.Router();

mainRouter.use(userRouter);
mainRouter.use(repoRouter);
mainRouter.use(issueRouter);

mainRouter.get("/", (req, res) => {
    res.send("welcome");
  });

  module.exports = mainRouter;