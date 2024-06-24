import { Router } from "express";
import { signin } from "../controllers/auth.cotroller.js";

const routerAuth = Router();

routerAuth.post("/signin", signin);

export { routerAuth };