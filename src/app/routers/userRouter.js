const { Router } = require("express");
const UserController = require("@controllers/UserController");

const userRouter = new Router();

userRouter.post("/users", UserController.store);
userRouter.get("/users", UserController.index);
userRouter.put("/users/:id", UserController.update);
userRouter.delete("/users/:id", UserController.delete);

module.exports = userRouter;
