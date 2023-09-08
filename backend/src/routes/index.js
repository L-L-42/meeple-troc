const router = require("express").Router();

const usersRouter = require("./users.routes");
const toysRouter = require("./toys.routes");
const boardGamesRouter = require("./boardGames.routes");
const toyBoxesRouter = require("./toyBoxes.routes");
const toyLibrariesRouter = require("./toyLibraries.routes");

router.use("/users", usersRouter);
router.use("/toys", toysRouter);
router.use("/boardGames", boardGamesRouter);
router.use("/toyBoxes", toyBoxesRouter);
router.use("/toyLibraries", toyLibrariesRouter);

module.exports = router;
