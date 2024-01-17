const express = require("express");

const usersControllers = require("../Controllers/usersControllers");

const usersMiddlewares = require("../Middlewares/usersMiddlewares")

const router = express.Router();

router.get("/", usersControllers.getAllUsers);

router
  .route("/:id")
  .get("/:id", usersControllers.getOneUser)
  .patch(usersControllers.updateUser)
  .delete(usersControllers.deleteUser);

module.exports = router;
