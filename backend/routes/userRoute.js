import express from 'express';
import { loginUser, registerUser, adminLogin, getAllUsers } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/admin', adminLogin);

// ✅ Add this new GET route to fetch all users
userRouter.get('/', getAllUsers);

export default userRouter;
