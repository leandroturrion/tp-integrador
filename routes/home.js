const express = require("express")
const router = express.Router()
const home = require("../Controllers/homeController")

router.get ("/", home.home)

module.exports = router