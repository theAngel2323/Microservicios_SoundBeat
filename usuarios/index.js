const fs = require("fs");
const express = require("express");
const app = express();
const PORT = 3001;
// Endpoint simple de usuarios
app.get("/usuarios", (req, res) => {
  fs.readFile("./usuarios.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer usuarios.json:", err);
      return res.status(500).json({ error: "No se pudo cargar el archivo" });
    }
    res.json(JSON.parse(data));
  });
});
// IMPORTANTE: escuchar en 0.0.0.0 para que funcione dentro del contenedor
// Con esto mi contenedor recibe solicitudes externas, escuhar peticiones
app.listen(PORT, "0.0.0.0", () => {
console.log(`Servicio de Usuarios corriendo en puerto ${PORT}`); });