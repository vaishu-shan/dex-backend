import Token from "../models/token.model.js";
import asyncHandler from "express-async-handler"


export const getPopularToken = asyncHandler( async(req,res)=>{
    try{
        const { chainId, include24HourPrice } = req.query;
        if (!chainId) {
          return res.status(400).send({ error: 'chainId is required' });
        }
    
        let projection = { __v: 0 }; // Exclude the __v field
        if (include24HourPrice === 'false') {
          projection.last24hPrice = 0; // Exclude last24hPrice if include24HourPrice is false
        }
    
        const tokens = await Token.find({ chainId }, projection);
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

