import { Router } from "express";
import { getAllPools, postPools, postPoolTx } from "../controllers/pool.controller.js";

const routerPools = Router();

routerPools.post("/pool/addPools", postPools);
routerPools.get("/pool/getPools", getAllPools);
routerPools.post('/pool/addPoolsTx', postPoolTx)

export { routerPools };
