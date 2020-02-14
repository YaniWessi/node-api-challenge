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

server.post("/api/projects", (req, res) => {
  Dbs.insert(req.body)
    .then(projects => {
      if (!req.body.project_id) {
        res.status(400).json({ errorMessage: "please provide project_id" });
      } else {
        res.status(201).json(projects);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        errorMessage: "there was an error while saving the project to database "
      });
    });
});

server.post("/api/actions", (req, res) => {
  Dbs.insert(req.body)
    .then(action => {
      if (!dbInfo.name || !dbInfo.bio) {
        res.status(400).json({ errorMessage: "please provide project_id" });
      } else {
        res.status(201).json(action);
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        errorMessage: "there was an error while saving the project to database "
      });
    });
});

server.put("/api/projects/:id", (req, res) => {
  const updateProject = req.params.id;
  Dbs.update(updateProject, req.body)
    .then(projects => {
      if (projects.name && project.description) {
        res.status(200).json(projects);
      } else {
        res
          .status(400)
          .json({ errorMassage: "make sure to add name and discription" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        errorMessage: "The user information could not be modified."
      });
    });
});

server.put("/api/actions/:id", (req, res) => {
  const updateAction = req.params.id;
  Dbs.update(updateAction, req.body)
    .then(action => {
      if (action.project_id && action.notes) {
        res.status(200).json(projects);
      } else {
        res
          .status(400)
          .json({ errorMassage: "make sure to add project_id and notes" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        errorMessage: "The user information could not be modified."
      });
    });
});

server.delete("/api/projects/:id", (req, res) => {
  Dbs.findById(req.params.id)
    .then(project => {
      if (project.length === 0) {
        res.status(400).json({
          message: " the project with the specified Id does not exit"
        });
      } else {
        Dbs.remove(req.params.id)
          .then(project => {
            res
              .status(200)
              .json({ message: "The id has been succefully removed" });
          })
          .catch(error => {
            res.status(500).json({ errorMessage: " failed to remove" });
          });
      }
    })

    .catch(error => {
      res.status(500).json({ errorMessage: " post could not be removed" });
    });
});

router.delete("/api/actions/:id", (req, res) => {
  Dbs.findById(req.params.id)
    .then(action => {
      if (action.length === 0) {
        res
          .status(400)
          .json({ message: " the action with the specified Id does not exit" });
      } else {
        Dbs.remove(req.params.id)
          .then(action => {
            res
              .status(200)
              .json({ message: "The id has been succefully removed" });
          })
          .catch(error => {
            res.status(500).json({ errorMessage: " failed to remove" });
          });
      }
    })

    .catch(error => {
      res.status(500).json({ errorMessage: " post could not be removed" });
    });
});

const port = 5000;

server.listen(port, () => console.log(`\n** API on port ${port} \n`));
