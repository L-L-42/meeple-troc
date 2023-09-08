const models = require("../models");

const add = (req, res) => {
  const { toyLibraries } = req.body;
  models.toyLibraries
    .insertMultiple(toyLibraries)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const findByToyLibraryId = (req, res) => {
  models.toyLibraries
    .findByToyLibraryId(req.params.id) // Fixing the variable name here
    .then(([result]) => {
      res.status(200).json(result); // Assuming you want to send a 200 status code here, change it as needed
    })

    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { add, findByToyLibraryId };
