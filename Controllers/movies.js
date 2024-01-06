import { Movie } from "../Modals/movies.js";


export const addContact=async(req,res)=>{
    // res.json({message:"addContact is working..."})
    const {name,releaseYear,genre,imgUrl,director,actors,description,duration,language,rating,awards,boxOffice,releaseDate}=req.body;
    let movie=await Movie.findOne({name});
    if(movie) return res.json({message:"Movie already exist"})
    movie = await Movie.create({
        name,
        releaseYear,
        genre,
        imgUrl,
        director,
        actors,
        description,
        duration,
        language,
        rating,
        awards,
        boxOffice,
        releaseDate,
    })
    res.json({message:'Movie Added',movie});
}

export const getContact=async(req,res)=>{
    const movie = await Movie.find();
    res.json({message:"All Movies..",movie});
}

export const getMovieById=async(req,res)=>{
    const movieID=req.params.id;
    const movie=await Movie.findById(movieID);
    if(!movie) return res.json({message:'Movie not available by this id'})
    res.json({message:"Your Movie by id...",movie})
}

export const updateById=async(req,res)=>{
    const movieID=req.params.id;
    const movie=await Movie.findById(movieID);
    if(!movie) return res.json({message:'InValid ID or Id deleted'})
    const {name,releaseYear,genre,imgUrl,director,actors,description,duration,language,rating,awards,boxOffice,releaseDate}=req.body
    movie.name=name,
    movie.releaseYear=releaseYear,
    movie.genre=genre,
    movie.imgUrl=imgUrl,
    movie.director=director,
    movie.actors=actors,
    movie.description=description,
    movie.duration=duration,
    movie.language=language,
    movie.rating=rating,
    movie.awards=awards,
    movie.boxOffice=boxOffice,
    movie.releaseDate=releaseDate
    await movie.save();
    res.json({message:"Movie Updated...",movie})
}

export const deleteById=async(req,res)=>{
    const moviesId=req.params.id;
    let movie=await Movie.findById(moviesId);
    if(!movie) return res.json({message:'id already deleted'});
    await Movie.deleteOne();
    res.json(
        {
            success:true,
            message:'Movies deleted Succesfully'
        }
    )
}