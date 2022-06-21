import {Request,Response,Router} from 'express'
import { Items } from '../contracts/Items';
import {findAll,findById,postWork,putForId,deleteForId} from '../Services/ItemsService'

export const itemsRouter:Router = Router();

// Get all items
itemsRouter.get('/', async (req:Request,res:Response)=>{
    try{
        const result = await findAll();
        res.send(result);
    } catch (error){
        res.send('error');
    }
});

//Get by id
itemsRouter.get('/:id',async (req:Request,res:Response)=>{
    try{
    const result = await findById(Number(req.params.id));
    res.json(result);
    }catch (error){
        // logger
        res.status(200).send('error');
    }
});

//Post
itemsRouter.post('/',async (req:Request,res:Response)=>{

    let newEntry:Items ={
    id:Number(req.body.id),
    title:req.body.title,
    body:req.body.body
    }
    // if(newEntry)
        console.log(newEntry);
    try{
        const result = await postWork(newEntry);
        res.json(result);
    }catch (error){
        res.status(404).send('error');
    }
});


//Put
itemsRouter.put('/:id',async (req:Request,res:Response)=>{
    console.log('TEST')
    try{
        const result = await putForId(Number(req.params.id));
        res.json(result);
        }catch (error){
            // logger
            res.status(200).send('error');
        }
    res.send('Put');
});


//Delete
itemsRouter.delete('/:id',async (req:Request,res:Response)=>{
    try{
        const result = await deleteForId(+req.params.id);
        res.json(result);
    }catch (error){
        res.status(404).send('error');
    }
});
