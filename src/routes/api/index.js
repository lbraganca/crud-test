import { Router } from 'express';
import db from '../../db';

const router = Router();

const isBodyValid = (body) =>
  typeof body === 'object' && body !== null && !Array.isArray(body);

/**
 * Insert new instances
 */
router.post('/:entity', async (request, response) => {
  const entityParam = request.getValue('entity');
  if (!entityParam) {
    return response.customError('missingParams');
  }
  const { body } = request;
  if (!isBodyValid(body)) {
    return response.customError('missingOrInvalidBody');
  }
  const {
    models: { [entityParam]: entity },
  } = db;
  if (!entity) {
    return response.customError('entityUndefined');
  }
  try {
    return response.success()(await entity.create(body));
  } catch (error) {
    return response.error()(error);
  }
});

/**
 * Query instances
 * host/Note/1
 */
router.get('/:entity', async (request, response) => {
  const entityParam = request.getValue('entity');
  if (!entityParam) {
    return response.customError('missingParams');
  }
  const {
    models: { [entityParam]: entity },
  } = db;
  if (!entity) {
    return response.customError('entityUndefined');
  }
  try {
    return response.success()(await entity.findAll({ where: request.query }));
  } catch (error) {
    return response.error()(error);
  }
});

/**
 * Update instances
 */
router.put('/:entity', async (request, response) => {
  const entityParam = request.getValue('entity');
  if (!entityParam) {
    return response.customError('missingParams');
  }
  const { body } = request;
  if (!isBodyValid(body)) {
    return response.customError('missingOrInvalidBody');
  }
  const {
    models: { [entityParam]: entity },
  } = db;
  if (!entity) {
    return response.customError('entityUndefined');
  }
  try {
    return response.success()(
      await entity.update(body, { where: request.query }),
    );
  } catch (error) {
    return response.error()(error);
  }
});

/**
 * Delete instances
 */
router.delete('/:entity', async (request, response) => {
  const entityParam = request.getValue('entity');
  if (!entityParam) {
    return response.customError('missingParams');
  }
  const {
    models: { [entityParam]: entity },
  } = db;
  if (!entity) {
    return response.customError('entityUndefined');
  }
  try {
    return response.success()(await entity.destroy({ where: request.query }));
  } catch (error) {
    return response.error()(error);
  }
});

export default router;
