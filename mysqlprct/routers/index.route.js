const { Router } = require("express");
const userRoute = require("./user.router");

const IndexRoute = Router();

IndexRoute.use("/",userRoute)

module.exports = IndexRoute;