const express = require("express");
const router = express.Router();
const usuarioController = require("../Controllers/usuarioController");

module.exports = () => {
  //login
  router.post("/login", usuarioController.nuevoUsuario);

  //agrega nuevos usuarios a la base de datos
  router.post("/register", usuarioController.nuevoUsuario);

  //agrega nuevos usuarios a la base de datos
  router.post("/usuario", usuarioController.nuevoUsuario);

  //devuelve todos los usuarios
  router.get("/usuario", usuarioController.obtenerUsuarios);

  //elimina a un usuario por su _id
  router.delete("/usuario/:user", usuarioController.eliminarUsuario);

  //find by usuario
  router.get("/usuario/:user", usuarioController.getUser);

  return router;
};
