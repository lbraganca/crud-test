import http from 'http';
import app from './app';
import logger from './logger';
import config from './config';

const {
  server: { port },
} = config;

app.set('port', port);
const httpServer = http.createServer(app);

httpServer.on('error', (error) => {
  const { syscall, code } = error;
  if (syscall !== 'listen') {
    throw error;
  }
  if (code === 'EACCESS') {
    return logger.error(`${port} requires elevated privileges.`);
  }
  if (code === 'EADDRINUSE') {
    return logger.error(`${port} is already in use.`);
  }
  throw error;
});

httpServer.on('listening', () => {
  const { address } = httpServer.address();
  logger.info(`Listening on ${address}:${port}`);
});

httpServer.listen(port);
