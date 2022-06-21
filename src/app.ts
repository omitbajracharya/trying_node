import express, { Express } from 'express';
import { itemsRouter } from './Router/ItemsRouter';
import bodyParser from 'body-parser';
const app:Express = express(); 
app.use(bodyParser.json())
require('dotenv').config();
// dotenv.config();
const PORT = process.env.PORT || 3000;


app.use('/items',itemsRouter);

app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`);
});


