import { Router } from "express";
import { getAllPools, postPools } from "../controllers/pool.controller.js";

const routerPools = Router();

routerPools.post("/pool/addPools", postPools);
routerPools.get("/pool/getPools", getAllPools);


export { routerPools };
