var express = require("express");
var router = express.Router();
const userController = require("../features/controllers/users");

router.post("/users", userController.store);
router.get("/users", userController.index);
router.get("/users/:id", userController.show);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.destroy);

module.exports = router;
