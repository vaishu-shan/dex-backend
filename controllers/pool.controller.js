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

});

export const getAllPools = asyncHandler(async (req, res) => {
    const {
        chainId,
        orderby,
        sort,
        interval,
        searchContent,
        userAddress
      } = req.query;
      
      console.log("-----req.query----",req.query)
    
      // Create filter object
      let filter = {};
  
      if (chainId) {
        filter.chainId = chainId;
      }
    
      if (searchContent) {
        filter.$or = [
          { name: new RegExp(searchContent, 'i') },
          { symbol: new RegExp(searchContent, 'i') },
          { address: new RegExp(searchContent, 'i') },
          { 'token0.name': new RegExp(searchContent, 'i') },
          { 'token0.symbol': new RegExp(searchContent, 'i') },
          { 'token1.name': new RegExp(searchContent, 'i') },
          { 'token1.symbol': new RegExp(searchContent, 'i') }
        ];
      }
    
      if (userAddress) {
        filter.address = userAddress;
      }
    
      // Create sort object
      let sortOptions = {};
      if (orderby && ['liquidity', 'volume', 'fees', 'apr'].includes(orderby)) {
        sortOptions[orderby] = sort === 'asc' ? 1 : -1;
      }
    
      // Interval filter (for example: last 24 hours, last 7 days, etc.)
      if (interval) {
        const now = new Date();
        const intervalMapping = {
          '24h': new Date(now.getTime() - 24 * 60 * 60 * 1000),
          '7d': new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000),
          '30d': new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
        };
    
        const intervalDate = intervalMapping[interval];
        if (intervalDate) {
          filter.createdAt = { $gte: intervalDate };
        }
      }
    
      try {
        const pools = await Pool.find(filter).sort(sortOptions);
        res.status(200).json(pools);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
})