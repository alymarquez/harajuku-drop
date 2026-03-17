const express = require("express");
const productoController = require("../controllers/productController.js");

const router = express.Router();

router.get("/", productoController.getAllProducts);
router.get("/:id", productoController.getProductById);
router.get("/category/:slug", productoController.getProductsByCategory);

module.exports = router;