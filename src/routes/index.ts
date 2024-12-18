import { Router } from "express";
import itemRoutes from "../features/items/items.routes";

const router = Router();

router.use(itemRoutes);

export default router;
