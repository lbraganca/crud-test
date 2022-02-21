import { DataTypes, Model } from 'sequelize';
import { randomBytes, createHash } from 'crypto';
import config from '../../config';
import db from '../../db';

const { authentication } = config;

class User extends Model {
  static generateSalt = () =>
    randomBytes(authentication.password.salt.size).toString(
      authentication.password.salt.encoding,
    );

  static encryptPassword = (plainPassword, salt) =>
    createHash(authentication.password.algorithm)
      .update(plainPassword)
      .update(salt)
      .digest(authentication.password.digest);

  validatePassword(enteredPassword) {
    return this.password === User.encryptPassword(enteredPassword, this.salt);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        const salt = User.generateSalt();
        this.setDataValue('salt', salt);
        this.setDataValue('password', User.encryptPassword(value, salt));
      },
    },
  },
  { sequelize: db },
);

export default User;
