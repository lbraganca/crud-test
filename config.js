"use strict";

module.exports = {
    authentication: {
        exceptions: [],
        field: "authorization",
        password: {
            algorithm: "RSA-SHA512",
            digest: "hex",
            salt: {
                size: 16,
                encoding: "base64"
            }
        },
        jwt: {
            secret: "IeriOTH7R868I3WJRVXTCqjXHQWpDwrMJx0NbuhsnI/6oKX54zLYR0/ttB1X1hv5NfAlcvhuCZxfHs/tHCfIGyaO/VZl9W+je8CYPOdFYJr9AFzKvVRgz+Lt+nxu0K9DLhfil0C4ifb5AlY4gpZkDKW+5WhNVgc3rkTpWRx0v6Q=",
            options: {
                algorithm: "HS256",
                expiresIn: 3600000 // 1h
            }
        }
    },
    server: {
        port: process.env.PORT || 8080
    },
    database: {
        schema: "crud_db",
        username: "root",
        password: "root",
        sequelizeOptions: {
            host: "localhost",
            dialect: "mysql",
            port: 3306,
            pool: {
                max: 10,
                min: 1
            }
        }
    }
};