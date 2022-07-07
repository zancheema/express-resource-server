const {Router} = require("express");
const authenticate = require("../passport/passport-middleware");

const userRouter = Router();

userRouter.get("/profile", authenticate, (req, res) => {
    res.json(req.user);
});

module.exports = userRouter;