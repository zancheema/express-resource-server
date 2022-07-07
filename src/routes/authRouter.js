const { Router } = require("express");

const authRouter = Router();

authRouter.post("/login", (req, res) => {
    res.redirect(307, "http://localhost:4001/auth/login");
});

authRouter.post("/register", (req, res) => {
    res.redirect(307, "http://localhost:4001/auth/register");
});

module.exports = authRouter;