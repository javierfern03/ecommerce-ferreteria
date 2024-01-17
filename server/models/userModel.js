const { db } = require('../database/config');
const { DataTypes } = require('sequelize');

const User = db.define('users', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  passwordChangeAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  profileImgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue:
      'https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-imagen-s%C3%ADmbolo-usuario-medios-sociales-icono-209498286.jpg',
  },
  role: {
    type: DataTypes.ENUM('user', 'seller', 'admin'),
    allowNull: false,
    defaultValue: 'user',
  },
  status: {
    type: DataTypes.ENUM('active', 'desabled'),
    defaultValue: 'active',
    allowNull: false,
  },
});

module.exports = User;
