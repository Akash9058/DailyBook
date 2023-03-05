const express =require('express');

const router = express.Router();

const homeController = require('../controller/homeController');
const userController = require('../controller/userController');
router.get('/',homeController.home);
router.get('/sign_Up',homeController.sign_Up);
router.get('/sign_In',homeController.sign_In);
router.get('/profile',homeController.profile);

router.post('/sign_Up',userController.signUp);
router.post('/sign_In',userController.signIn);

module.exports = router;