import errorDescriptions from '../../routes/errors/error-descriptions';

function success(status = 200) {
  return (content) => {
    this.status(status);
    this.json(content);
  };
}

function customError(key) {
  const errorDescription = errorDescriptions[key];
  this.status(errorDescription.code);
  this.json(errorDescription);
}

function error(status = 400) {
  return (content) => {
    this.status(status);
    this.json({
      ...errorDescriptions.other,
      code: status,
      message: content.message,
    });
  };
}

export default function middleware(request, response, next) {
  response.success = success;
  response.customError = customError;
  response.error = error;
  next();
}
