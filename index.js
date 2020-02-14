const express = require("express");

const Dbs = require("./data/dbConfig");

const server = express();

server.use(express.json());

server.get("/api/actions/:id", (req, res) => {
  Dbs.get(req.params.id)
    .then(actions => {
      if (!id) {
        res
          .status(500)
          .json({ errorMessage: "The information could not be retreived" });
      } else {
        res.status(200).json(actions);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        errorMessage: "there was an error tring to get actions form database"
      });
    });
});

server.get("/api/projects/:id", (req, res) => {
  Dbs.get(req.params.id)
    .then(id => {
      if (!projects) {
        res
          .status(500)
          .json({ errorMessage: "The information could not be retreived" });
      } else {
        res.status(200).json(project);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        errorMessage: "there was an error tring to get actions form database"
      });
    });
});

server.post("/api/projects/:id", (req, res) => {
  Dbs.insert(req.body);
  console.log(req.body);
});
const port = 5000;

server.listen(port, () => console.log(`\n** API on port ${port} \n`));
