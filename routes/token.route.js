import { Router } from "express";
import { getPopularToken, postPopularToken } from "../controllers/token.controller.js";


const routerToken = Router();

routerToken.get("/getPopularToken", getPopularToken);
routerToken.post("/postPopularToken", postPopularToken);


export { routerToken };
