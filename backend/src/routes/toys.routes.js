const router = require("express").Router();

const toyControllers = require("../controllers/toyControllers");

router.get("/", toyControllers.browse);
router.get("/:id", toyControllers.read);
router.put("/toys/:id", toyControllers.edit);
router.post("/", toyControllers.add);
router.delete("/:id", toyControllers.destroy);

module.exports = router;
