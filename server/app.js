import express from "express";
import {dbConn} from './DataBase/db_conn.js'
import { Addmessage, getAllMessage } from "./controller/MessageController.js";
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express(); 

app.use(cors())
app.use(bodyParser.json());


app.get("/",(req, res)=> res.json("hii"))
app.post("/metromediaz/v1/message",Addmessage );
app.get('/metromediaz/v1/message',getAllMessage)



 


dbConn()
export  default app;