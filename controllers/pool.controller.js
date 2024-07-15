import Pool from "../models/pools.model.js"
import asyncHandler from "express-async-handler"

export const postPools = asyncHandler(async (req, res) => {
    try {
        const newPool = new Pool(req.body);
        const savedPool = await newPool.save();
        res.status(201).json(savedPool);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

})

export const getPools = asyncHandler(async (req, res) => {
    try {
        const pools = await Pool.find();
        res.status(200).json(pools);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})