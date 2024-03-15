"use strict"

const router = require('express').Router()
const fs = require("fs");
/* ------------------------------------------------------- */
// routes/patient:

const permissions = require('../middlewares/permissions')
const patient = require('../controllers/patient')

// URL: /patients

router.route('/')
    .get( patient.list)
    .post(patient.create)


router
  .route("/:id")
  .get(patient.read)
  .put(
    permissions.isAdminOrPatient, patient.update)
  .patch(permissions.isAdminOrPatient, patient.update)
  .delete(permissions.isAdminOrPatient, patient.delete);


/* ------------------------------------------------------- */
module.exports = router
