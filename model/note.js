"use strict";
const { DataTypes, Model } = require("sequelize");
const User = require("./user");
const db = require("../db");

class Note extends Model { }

Note.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: ""
        },
        author: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: "id"
            }
        }
    },
    {
        sequelize: db
    }
);

module.exports = Note;