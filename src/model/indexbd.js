const usuario = require('./usuarios');
const Rol = require('./rol');

usuario.belongsTo(Rol, { foreignKey: 'role_id' });
Rol.hasMany(usuario, { foreignKey: 'role_id' });

module.exports = {
  usuario,
  Rol
};

