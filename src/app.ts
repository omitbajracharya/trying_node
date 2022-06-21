import express, { Express } from 'express';
import { itemsRouter } from './Router/ItemsRouter';
// import dotenv from 'dotenv'
// import { env } from 'process'
// import env from 'dotenv';
// env.config();
// import 'dotenv/config/'
require('dotenv').config();
// dotenv.config();
const PORT = process.env.PORT || 3000;
const app:Express = express(); 

app.use('/items',itemsRouter);

app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`);
});


