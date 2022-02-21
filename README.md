# crud-test

Simple `express` REST API that manages Notes. Implemented in order to test some modules:

- `sequelize`: Promise-based Node.js ORM
- `dotenv`: Loads environment variables from an `.env` file into Node's `process.env`

## Routes

### `POST /auth/login`

* Body: `{ "email", "password" }`

* Signs a valid `JWT` that the user should send on authentication-required routes. It must be attached on any field (`Header`, `Query` or `Body`) named `authorization`.

### `POST /api/:entity`

* Body with the specified entity's properties.

### `GET /api/:entity?param=value`

* Omit params if you want all the entries. If you want to search for `id`, simply fetch `/api/Note?id=1`.

### `PUT /api/:entity?param=value`

* Body with the new values to update.

### `DELETE /api/:entity?param=value`

## Demo

## Install

```
git clone git@github.com:lbraganca/crud-test.git
npm i
```

## Development

```
npm run dev
```

## Production

```
npm run build
```

## TODOs

- Add user roles support
- Don't expose the `User` entity to the routes
- Add recaptcha to avoid brute force attacks
