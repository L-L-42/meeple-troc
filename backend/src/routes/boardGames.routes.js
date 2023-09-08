const router = require("express").Router();

const boardGameControllers = require("../controllers/boardGameControllers");

router.get("/", boardGameControllers.browse);
router.get("/:id", boardGameControllers.read);
router.put("/boardGames/:id", boardGameControllers.edit);
router.post("/", boardGameControllers.add);
router.delete("/:id", boardGameControllers.destroy);

module.exports = router;
