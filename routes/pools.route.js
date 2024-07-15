import { Router } from "express";
import { getPools, postPools } from "../controllers/pool.controller.js";

const routerPools = Router();

routerPools.post("/addPools", postPools);
routerPools.get("/getPools", getPools);


export { routerPools };
