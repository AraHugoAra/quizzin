import { Router } from "express";
import { getAllCategory } from "../controllers/Category";
const categoryRoutes = Router();

categoryRoutes.get('/allCategories', getAllCategory)

export { categoryRoutes };