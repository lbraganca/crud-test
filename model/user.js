"use strict";
const { DataTypes, Model } = require("sequelize");
const { randomBytes, createHash } = require("crypto");
const { authentication } = require("../config");
const db = require("../db");

class User extends Model {
    static generateSalt = () => randomBytes(authentication.password.salt.size).toString(authentication.password.salt.encoding);
    static encryptPassword = (plainPassword, salt) => {
        return createHash(authentication.password.algorithm)
            .update(plainPassword)
            .update(salt)
            .digest(authentication.password.digest);
    }

    validatePassword(enteredPassword) {
        return this.password === User.encryptPassword(enteredPassword, this.salt);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        salt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            set(value) {
                this.setDataValue("salt", User.generateSalt());
                this.setDataValue("password", User.encryptPassword(value, this.salt));
            }
        }
    },
    { sequelize: db }
);

module.exports = User;