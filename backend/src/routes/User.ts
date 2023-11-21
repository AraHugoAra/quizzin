import { Router } from "express";
// import { verifySignUp } from '../controllers/middleware/verifySignUp';
import { register , login} from '../controllers/User';

const userRoutes = Router();

userRoutes.post('/register', register);
userRoutes.get('/login', login)

export {userRoutes}