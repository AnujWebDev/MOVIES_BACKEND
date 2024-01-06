import express  from "express";
import { addContact, deleteById, getContact, getMovieById, updateById } from "../Controllers/movies.js";

const router = express();

router.get('/',(req,res)=>{
    res.json({message:"THis is Home Route"});
})

router.post('/addcontacts',addContact);

router.get('/getcontacts',getContact);

router.get('/:id',getMovieById);

router.put('/:id',updateById);

router.delete('/:id',deleteById)

export default router