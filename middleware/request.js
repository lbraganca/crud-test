"use strict";
function getValue(field) {
    return this.params?.[field] || this.body?.[field] || this.query?.[field] || (this.header && this.header(field)) || null;
};

module.exports = function (request, response, next) {
    request.getValue = getValue;
    next();
};
