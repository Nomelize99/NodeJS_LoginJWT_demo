const userRouter = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

userRouter.post('/login',userController.login);
userRouter.post('/register', userController.signup);
userRouter.get('/logout',auth,userController.logout);

//getall for check user
userRouter.get('/user',userController.getalluser);
module.exports = userRouter;