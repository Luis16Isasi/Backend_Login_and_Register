const express = require("express");
const router = express.Router();
const usuarioController = require("../Controllers/usuarioController");

module.exports = () => {
  //agrega nuevos usuarios a la base de datos
  router.post("/usuario", usuarioController.nuevoUsuario);

  //devuelve todos los usuarios
  router.get("/usuario", usuarioController.obtenerUsuarios);

  //elimina a un usuario por su _id
  router.delete("/usuario/:id", usuarioController.eliminarUsuario);

  return router;
};
