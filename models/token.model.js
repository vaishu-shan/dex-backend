import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema(
  {
    chainId: { type: String, required: true },
    address: { type: String },
    decimals: { type: Number },
    name: { type: String },
    symbol: { type: String },
    logo: { type: String},
    rank: { type: Number},
    price: { type: String },
    last24hPrice: { type: String, required: true }
  },
  { timestamps: true }
);

const Token = mongoose.model('Token', tokenSchema);

export default Token;
