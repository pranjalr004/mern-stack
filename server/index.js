import express from "express"
import dotenv from "dotenv"
import Router from './routes/route.js'
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import cors from "cors"
import bodyParser from "body-parser";

const app=express()

dotenv.config()

app.use(cors())
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router)

const PORT=8000;
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
Connection(USERNAME,PASSWORD)

app.listen(PORT,()=>console.log(`Server is running successfully on PORT ${PORT}`))

DefaultData()

export let paytmMerchantKey=process.env.PAYTM_MERCHANT_KEY;

export let paytmParams={};
paytmParams['MID']=process.env.PAYTM_MID;
paytmParams['WEBSITE']=process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID']=process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY']=process.env.PAYTM_INDUSTRY_TYPE;
paytmParams['ORDER_ID']