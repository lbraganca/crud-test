import 'dotenv/config';

const config = {
  server: {
    port:
      process.env.PORT ?? process.env.NODE_ENV === 'development' ? 8080 : 80,
  },
  authentication: {
    exceptions: [],
    field: 'authorization',
    password: {
      algorithm: 'RSA-SHA512',
      digest: 'hex',
      salt: {
        size: 16,
        encoding: 'base64',
      },
    },
    jwt: {
      secret:
        'IeriOTH7R868I3WJRVXTCqjXHQWpDwrMJx0NbuhsnI/6oKX54zLYR0/ttB1X1hv5NfAlcvhuCZxfHs/tHCfIGyaO/VZl9W+je8CYPOdFYJr9AFzKvVRgz+Lt+nxu0K9DLhfil0C4ifb5AlY4gpZkDKW+5WhNVgc3rkTpWRx0v6Q=',
      options: {
        algorithm: 'HS256',
        expiresIn: 3600000, // 1h
      },
    },
  },
  log: {
    path: process.env.LOG_PATH ?? './src/logs',
  },
  database: {
    schema: process.env.DB_SCHEMA,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    sequelizeOptions: {
      host: process.env.DB_HOST ?? 'localhost',
      dialect: 'mysql',
      port: 3306,
      pool: {
        max: 10,
        min: 1,
      },
    },
  },
};

export default config;
