const express = require('express');
const router = express.Router();

const sucursalesController = require('../controllers/sucursalesControllers')

router.get('/',sucursalesController.sucursalesUno);
router.get ("/:id",sucursalesController.sucursalesDos);



module.exports = router;