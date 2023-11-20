import { Router } from "express";
import { verifySignUp } from '../controllers/middleware/verifySignUp';
import { register , login} from '../controllers/User';

const userRoutes = Router();

userRoutes.post('/register', verifySignUp, register);
userRoutes.post('login', login)

export {userRoutes}