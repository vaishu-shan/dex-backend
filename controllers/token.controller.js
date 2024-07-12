import Token from "../models/token.model.js";
import asyncHandler from "express-async-handler"


export const getPopularToken = asyncHandler( async(req,res)=>{
    try{
        const { chainId, include24HourPrice } = req.query;
        let query = {};
        if (chainId) {
          query.chainId = chainId;
        }
        const tokens = await Token.find(query).select(include24HourPrice === 'true' ? 'chainId address decimals name symbol logo rank price last24hPrice' : 'chainId address decimals name symbol logo rank price');
        res.status(200).send(tokens);
    }catch{
        res.status(500).json({ message: e })

    }
})

export const postPopularToken = asyncHandler(async(req,res)=>{
    try {
        const token = new Token(req.body);
        const savedToken = await token.save();
        res.status(201).send(savedToken);
      } catch (error) {
        res.status(400).send(error);
      }
})

