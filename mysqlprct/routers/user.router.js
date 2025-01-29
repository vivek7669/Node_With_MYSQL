const { Router } = require("express");
const { getAllUser, createUser, verifyUser } = require("../controller/user.controller");
const { chceckingBody } = require("../middleware/checkbodyregister");
const { chceckingBodyofLogin } = require("../middleware/chceckingbodylogin");

const userRoute = Router();

userRoute.get("/",getAllUser);
userRoute.post("/register",chceckingBody,createUser);
userRoute.post("/login",chceckingBodyofLogin,verifyUser);

module.exports = userRoute;