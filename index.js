const express = require('express');
const app = express();
const routerProductos = require('./rutas/rutas')

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/api", routerProductos);
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Servidor levantado en el puerto: ${port}`)
})