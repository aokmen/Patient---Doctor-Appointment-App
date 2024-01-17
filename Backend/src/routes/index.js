"use strict"

const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/:

// URL: /

// auth:
router.use('/auth', require('./auth'))
// call user.create for /account/register:
//const { create: userCreate } = require('../controllers/user')
//router.post('/account/register', userCreate)

// user:
router.use('/admins', require('./admin'))
// token:
router.use('/tokens', require('./token'))


// branch:
router.use('/branches', require('./branch'))

// doctor:
router.use('/doctors', require('./doctor'))

// city:
router.use('/cities', require('./city'))

// documents:
router.use('/documents', require('./document'))



/* ------------------------------------------------------- */
module.exports = router