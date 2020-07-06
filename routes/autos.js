const express = require('express');
const router = express.Router();

const autosController = require('../controllers/autosController')

router.get('/',autosController.autos);
router.get("/", autosController.autos)


module.exports = router;