const { Product, Category } = require("../db/models/index.js");

// Obtener todos los productos
const getAllProducts = async (req, res) => {
    try {
        const productos = await Product.findAll({
            include: {
                model: Category
            }
        })
        res.json(productos)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const producto = await Product.findByPk(id, {
            include: {
                model: Category
            }
        })

        if (!producto){
            res.status(404).json({ error: "Producto no encontrado" })
        }

        res.json(producto)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getProductsByCategory = async (req, res) => {
    try {
        const { categoryId } = req.params
        const productos = await Product.findAll({
            where: { categoryId },
            include: {
                model: Category
            }
        })

        res.json(productos)
    } catch (error) {
        res.status(500).json({ error : error.message })
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductsByCategory
};