const express = require('express')
const { getAllProducts, getProductsByCategory, getProductById } = require('../controllers/products')
const router = express.Router()

const url = require('url')
console.log(url)
// Routes

// To fetch all products
router.get('/allProds', getAllProducts)

// To fetch products by category
router.get(`/category/:category`, getProductsByCategory)

// To fetch product by id
router.get(`/product/:id`, getProductById)

module.exports = router