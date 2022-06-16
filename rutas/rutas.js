const express = require("express");
const router = express.Router();

const { getAllProductos, getProductById, addProduct, updateProducto, deleteById, } = require("../productos/productos");

router.get("/productos", getAllProductos);
router.get("/productos/:id", getProductById);
router.post("/productos", addProduct);
router.put("/productos/:id", updateProducto);
router.delete("/productos/:id", deleteById);

module.exports = router;