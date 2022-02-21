import jwt from 'jsonwebtoken';
import { Router } from 'express';
import User from '../../model/User';
import config from '../../config';

const {
  authentication: { jwt: jwtConfig },
} = config;
const router = Router();

/**
 * Login
 */
router.post('/login', async (request, response) => {
  const email = request.getValue('email');
  const password = request.getValue('password');
  if (!email || !password) {
    return response.customError('missingParams');
  }
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return response.customError('userNotFound');
  }
  if (!user.validatePassword(password)) {
    return response.customError('wrongPassword');
  }
  return jwt.sign(
    { id: user.id, email: user.email },
    jwtConfig.secret,
    jwtConfig.options,
    (error, token) =>
      error ? response.error()(error) : response.success()(token),
  );
});

export default router;
