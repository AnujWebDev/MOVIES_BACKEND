import express  from "express";
import {  addMovie, deleteById, getMovieById, getMovies, updateById } from "../Controllers/movies.js";

const router = express();

router.get('/',(req,res)=>{
    res.json({message:"THis is Home Route"});
})

router.post('/addmovie',addMovie);

router.get('/getmovies',getMovies);

router.get('/:id',getMovieById);

router.put('/:id',updateById);

router.delete('/:id',deleteById)

export default router