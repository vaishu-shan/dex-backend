import Auth from '../models/auth.model.js';
import jwt from 'jsonwebtoken';


export const signin = async (req, res) => {
    const {userAddress } = req.body;
    console.log("req.body", req.body)
    if (!userAddress) {
      res.status(400);
      throw new Error("Wallet address is mandatory");
    }
    try {     
        jwt.sign({wallet:userAddress}, "Secret", {}, (err, token) => {
          if (err) throw err;
          console.log("token",token)
          res.status(200).json({token});

        });
   
    } catch (e) {
      console.log("error in signin", e)
    }
  };

  
