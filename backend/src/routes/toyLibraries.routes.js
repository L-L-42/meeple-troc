const router = require("express").Router();

const toyLibraryControllers = require("../controllers/toyLibraryControllers");
const toyLibraryBoardGameControllers = require("../controllers/toyLibraryBoardGameControllers");

router.get("/", toyLibraryControllers.browse);
router.get("/:id", toyLibraryControllers.read);
router.put("/boardGames/:id", toyLibraryControllers.edit);
router.post("/", toyLibraryControllers.add);
router.delete("/:id", toyLibraryControllers.destroy);

// Routes for boardGames

router.get(
  "/:id/boardgames/",
  toyLibraryBoardGameControllers.findByToyLibraryId
);
router.post("/:id/boardgames", toyLibraryBoardGameControllers.add);

module.exports = router;
