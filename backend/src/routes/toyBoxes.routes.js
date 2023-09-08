const router = require("express").Router();

const toyBoxControllers = require("../controllers/toyBoxControllers");

router.get("/", toyBoxControllers.browse);
router.get("/:id", toyBoxControllers.read);
router.put("/boardGames/:id", toyBoxControllers.edit);
router.post("/", toyBoxControllers.add);
router.delete("/:id", toyBoxControllers.destroy);

module.exports = router;
