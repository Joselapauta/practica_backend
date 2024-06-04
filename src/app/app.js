const express = require('express');
const app = express();
const { usuario, Rol } = require('../model/indexbd');
const { Sequelize } = require('sequelize');

app.use(express.json());

app.post('/agregar', async (req, res) => {
  const { userid, Nombre, Comando, Rango,rol_id } = req.body;
  await usuario.sync();
  const buscaProducts = await usuario.create({
    //userid: userid,
    Nombre: Nombre,
    Comando: Comando,
    Rango: Rango,
    rol_id: rol_id
  });

  res.status(201).json(buscaProducts);
});

app.post('/agregarrol', async (req, res) => {
  const { Nombre,role_id} = req.body;
  await Rol.sync();
  const agregarol = await Rol.create({
    Nombre: Nombre,
    role_id: role_id
    
  });

  res.status(201).json(agregarol);
});

module.exports = app;
