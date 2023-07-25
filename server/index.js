const express = require("express");
const { Router } = require("express");

const app = express();
const router = Router();

app.use(express.json());

router
  .get("/", (req, res) => {
    res.send("get");
  })

  .post("/", (req, res) => {
    res.send("post", req.body);
  })

  .put("/", (req, res) => {
    res.send("put");
  })

  .delete("/", (req, res) => {
    res.send("delete");
  });

app.use("/", router);

app.listen(5000, console.log("server on port 5000"));
