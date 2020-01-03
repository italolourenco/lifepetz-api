const { Router } = require("express");

const userRouter = require("@routers/userRouter");

const routes = new Router();

const routers = [userRouter];

routers.map(router => routes.use(router));

module.exports = routes;
