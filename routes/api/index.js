"use strict";
const { Router } = require("express");
const db = require("../../db");
const router = Router();

/**
 * Insert new instances
 */
router.post("/:entity", function (request, response) {
    let entityParam = request.getValue("entity");
    let body = request.body;
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
        return response.customError("missingOrInvalidBody");
    }
    if (!entityParam) {
        return response.customError("missingParams");
    }
    let entity = db.models[entityParam];
    if (!entity) {
        return response.customError("entityUndefined");
    }
    entity
        .create(body)
        .then(response.success())
        .catch(response.error());
});

/**
 * Query instance
 */
router.get("/:entity/:pk", function (request, response) {
    let entityParam = request.getValue("entity");
    let pkParam = parseInt(request.getValue("pk"));
    if (!entityParam || isNaN(pkParam)) {
        return response.customError("missingParams");
    }
    let entity = db.models[entityParam];
    if (!entity) {
        return response.customError("entityUndefined");
    }
    entity
        .findByPk(pkParam)
        .then(response.success())
        .catch(response.error());
});

/**
 * Query instances
 */
router.get("/:entity", function (request, response) {
    let entityParam = request.getValue("entity");
    if (!entityParam) {
        return response.customError("missingParams");
    }
    let entity = db.models[entityParam];
    if (!entity) {
        return response.customError("entityUndefined");
    }
    entity
        .findAll({ where: request.query })
        .then(response.success())
        .catch(response.error());
});

/**
 * Update instances
 */
router.put("/:entity", function (request, response) {
    let entityParam = request.getValue("entity");
    let body = request.body;
    if (typeof body !== "object" || body === null || Array.isArray(body)) {
        return response.customError("missingOrInvalidBody");
    }
    if (!entityParam) {
        return response.customError("missingParams");
    }
    let entity = db.models[entityParam];
    if (!entity) {
        return response.customError("entityUndefined");
    }
    entity
        .update(body, { where: request.query })
        .then(response.success())
        .catch(response.error());
});

/**
 * Delete instances
 */
router.delete("/:entity", function (request, response) {
    let entityParam = request.getValue("entity");
    if (!entityParam) {
        return response.customError("missingParams");
    }
    let entity = db.models[entityParam];
    if (!entity) {
        return response.customError("entityUndefined");
    }
    entity
        .destroy({ where: request.query })
        .then(response.success())
        .catch(response.error());
});

module.exports = router;