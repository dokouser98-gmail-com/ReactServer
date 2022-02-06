import express from "express";
import data from "./data.js";
//routes
const app = express();

//midleware
app.get("/api/productos", (req, res) => {
  res.send(data);
});

app.get("/producto/api/productos/slug/:slug", (req, res) => {
  const producto = data.productos.find((x) => x.slug === req.params.slug);
  console.log(producto);

  if (producto) {
    res.send(producto);
  } else {
    res.status(404).send({ message: "Producto no encontrado" });
  }
});

app.get("/", (req, res) => {
  res.send("server operando");
});
// puertos del servidor
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`servidor hosteado en http://localhost:${port}`);
});
