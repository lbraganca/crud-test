import jwt from 'jsonwebtoken';
import User from '../../model/User';
import config from '../../config';

const { authentication } = config;

export default function middleware(request, response, next) {
  const token = request.getValue(authentication.field);
  if (!token) {
    return response.customError('unauthorized');
  }
  return jwt.verify(
    token,
    authentication.jwt.secret,
    async (error, payload) => {
      if (error) {
        return response.error()(error);
      }
      try {
        request.user = await User.findByPk(payload.id);
        return next();
      } catch (ignored) {
        return response.customError('userNotFound');
      }
    },
  );
}
