const express = require('express')
const { createItem, deleteItem, editItem, getItems } = require('../controllers/admin')
const { fetchUser } = require('../middlewares/fetchUser')
const router = express.Router()

// Routes

router.post('/createItem', fetchUser, createItem)
router.delete('/delete/:id', fetchUser, deleteItem)
router.post('/edit/:id', fetchUser, editItem)
router.get('/userItems', fetchUser, getItems)

module.exports = router