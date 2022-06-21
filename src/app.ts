import express, { Express } from 'express';
import { itemsRouter } from './Router/ItemsRouter';

require('dotenv').config();
// dotenv.config();
const PORT = process.env.PORT || 3000;
const app:Express = express(); 

app.use('/items',itemsRouter);

app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`);
});


