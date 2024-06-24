import mongoose from 'mongoose';

const authSchema = new mongoose.Schema(
  {
    userAddress: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Auth = mongoose.model('Auth', authSchema);

export default Auth;
