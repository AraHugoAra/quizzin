import { Router } from "express";
// import { verifySignUp } from '../controllers/middleware/verifySignUp';
import { register , login} from '../controllers/User';
import { authenticate } from "../controllers/middleware/authenticate";

const userRoutes = Router();

userRoutes.post('/register', register);
userRoutes.post('/login',authenticate, login)

export {userRoutes}