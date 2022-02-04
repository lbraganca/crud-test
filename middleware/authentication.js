"use strict";
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const { authentication } = require("../config");

module.exports = function (request, response, next) {
    let token = request.getValue(authentication.field);
    if (!token) {
        return response.customError("unauthorized");
    }
    jwt.verify(token, authentication.jwt.secret, async (error, payload) => {
        if (error) {
            return response.error()(error);
        }
        try {
            request.user = await User.findByPk(payload.id);
        } catch (error) {
            response.customError("userNotFound");
        }
        next();
    });
};
