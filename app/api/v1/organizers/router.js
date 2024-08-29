const express = require('express');
const router = express();
const { createCMSOrganizer, createCMSUser, getCMSUsers } = require('./controller');
const { authenticateUser, authorizeRoles } = require('../../../middlewares/auth')

router.post('/organizers', authenticateUser, authorizeRoles('owner'), createCMSOrganizer); // create organizer hanya role owner
router.post('/users', authenticateUser, authorizeRoles('organizer'), createCMSUser); // create admin hanya role organizer
router.get('/users', authenticateUser, authorizeRoles('owner'), getCMSUsers); // get all user

module.exports = router;