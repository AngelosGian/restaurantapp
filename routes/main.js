const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home');


router.get('/', homeController.getIndex)
router.get('/signup', homeController.getSignUp);
router.get('/login', homeController.getLogin);
router.get('/dashboard', homeController.getDashboard);


module.exports = router