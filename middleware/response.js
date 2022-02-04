"use strict";
const errorDescriptions = require("../error-descriptions");

function success(status = 200) {
    return content => {
        this.status(status);
        this.json(content);
    };
};

function customError(key) {
    let errorDescription = errorDescriptions[key];
    this.status(errorDescription.code);
    this.json(errorDescription);
};

function error(status = 400) {
    return content => {
        let errorObject = {
            id: errorDescriptions.other.id,
            code: status,
            message: content.message
        };
        this.status(status);
        this.json(errorObject);
    };
};

module.exports = function (request, response, next) {
    response.success = success;
    response.customError = customError;
    response.error = error;
    next();
};
