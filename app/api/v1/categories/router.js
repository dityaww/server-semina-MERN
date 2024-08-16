const express = require('express')
const router = express()

const { create, index, find, update, destroy } = require('./controller')

router.get('/categories', index) // get all

router.get('/categories/:id', find) // get one categories

router.put('/categories/:id', update) // update
router.delete('/categories/:id', destroy) // delete
router.post('/categories', create) // create

module.exports = router