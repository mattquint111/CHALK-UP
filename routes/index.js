// handles all routes at localhost:3000/
const express = require('express')
const router = express.Router() //express-router
const bcrypt = require('bcrypt') //encryption
const models = require('../models') //sequelize models //go up 2-routes to find folder
const { Router } = require('express')
const SALT_ROUNDS = 10 // bcrypt


router.get('/', (req,res) => {
    res.render('index')
})

// export to app.js
module.exports = router
