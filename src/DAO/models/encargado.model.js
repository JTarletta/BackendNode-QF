import { DataTypes } from 'sequelize';
import { sequelize } from './../../util/connections.js';

export const Encargado = sequelize.define('encargado', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cuit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  razonSocial: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  estaValido: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  habilitado: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});
