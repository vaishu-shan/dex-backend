import { Router } from "express";
import { findToken, getPopularToken, postPopularToken } from "../controllers/token.controller.js";


const routerToken = Router();

routerToken.get("/getPopularToken", getPopularToken);
routerToken.post("/postPopularToken", postPopularToken);
routerToken.get("/findToken", findToken);


export { routerToken };
