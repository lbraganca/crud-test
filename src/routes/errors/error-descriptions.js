export default {
  other: {
    id: 0,
    code: 500,
    message: 'Unknown error',
  },
  missingParams: {
    id: 1,
    code: 400,
    message: 'Some params are missing',
  },
  entityUndefined: {
    id: 2,
    code: 400,
    message: 'Entity not defined',
  },
  missingOrInvalidBody: {
    id: 3,
    code: 400,
    message: 'Body is either missing or invalid',
  },
  userNotFound: {
    id: 4,
    code: 400,
    message: 'User not found',
  },
  wrongPassword: {
    id: 5,
    code: 400,
    message: 'Wrong password',
  },
  unauthorized: {
    id: 6,
    code: 401,
    message: 'Authentication required',
  },
};
