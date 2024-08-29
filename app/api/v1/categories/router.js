const express = require('express')
const router = express()
const { create, index, find, update, destroy } = require('./controller')

const { authenticateUser, authorizeRoles } = require('../../../middlewares/auth')
 
router.get('/categories', authenticateUser, authorizeRoles('organizer'), index) // get all
router.get('/categories/:id', authenticateUser, authorizeRoles('organizer'), find) // get one categories
router.put('/categories/:id', authenticateUser, authorizeRoles('organizer'), update) // update
router.delete('/categories/:id', authenticateUser, authorizeRoles('organizer'), destroy) // delete
router.post('/categories', authenticateUser, authorizeRoles('organizer'), create) // create

module.exports = router