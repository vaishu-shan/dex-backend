import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from "cors"
import config from './config.js';
import { Connect } from './database/connect.js';
import { routerAuth } from './routes/auth.route.js';
import { routerToken } from './routes/token.route.js';
import { routerPools } from './routes/pools.route.js';

dotenv.config();
const app = express();


//━━━━━━━━━━━━━━━━ Database ━━━━━━━━━━━━━━━━ ★
Connect();

//━━━━━━━━━━━━━━━━ Middlewares ━━━━━━━━━━━━━━━━ ★
app.use(cors());
app.use(express.json());
app.use(cookieParser());


//━━━━━━━━━━━━━━━━ router ━━━━━━━━━━━━━━━━ ★
app.use(routerAuth)
app.use(routerToken)
app.use(routerPools)

app.listen(config.Server.PORT, () => {
    console.log(`Server is running on port ${config.Server.PORT}`);
  });