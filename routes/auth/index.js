"use strict";
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const User = require("../../model/user");
const { authentication: { jwt: jwtConfig } } = require("../../config");
const router = Router();

/**
 * Login
 */
router.post("/login", async function (request, response) {
    let email = request.getValue("email");
    let password = request.getValue("password");
    if (!email || !password) {
        return response.customError("missingParams");
    }
    let user = await User.findOne({ where: { email } });
    if (!user) {
        return response.customError("userNotFound");
    }
    if (!user.validatePassword(password)) {
        return response.customError("wrongPassword");
    }
    jwt.sign({ id: user.id, email: user.email }, jwtConfig.secret, jwtConfig.options, (error, token) => {
        error ? response.error()(error) : response.success()(token);
    });
});

module.exports = router;