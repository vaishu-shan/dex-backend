import mongoose from 'mongoose';


const TokenSchema = new mongoose.Schema({
    chainId: { type: String},
    address: { type: String},
    decimals: { type: Number },
    name: { type: String},
    symbol: { type: String },
    logo: { type: String },
    rank: { type: Number },
    price: { type: String },
    last24hPrice: { type: String }
  });

const poolSchema = new mongoose.Schema(
  {
    chainId: { type: String },
    address: { type: String },
    decimals: { type: Number },
    name: { type: String },
    symbol: { type: String },
    logo: { type: String },
    rank: { type: Number },
    price: { type: String },
    last24hPrice: { type: String },
    token0: { type: TokenSchema, required: true },
    token1: { type: TokenSchema, required: true },
    liquidity: { type: String },
    liquidityUsd: { type: String },
    txHash: { type: String },
    explorerUrl: { type: String },
    token0Amount: { type: String },
    token1Amount: { type: String },
    volume: { type: String },
    fees: { type: String },
    apr: { type: String },
    poolDesc: { type: String }
  
  },
  { timestamps: true }
);

const Pool = mongoose.model('Pool', poolSchema);

export default Pool;