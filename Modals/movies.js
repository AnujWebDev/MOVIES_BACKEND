import mongoose from "mongoose";

const moviesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    releaseYear: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    imgUrl:{
        type:String,
        require:true
    },
    director: {
        type: String,
        required: true,
    },
    actors: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    awards: {
        type: String,
        required: false,
    },
    boxOffice: {
        type: Number,
        required: false,
    },
    releaseDate: {
        type: Date,
        required: true,
    },
});

export const Movie = mongoose.model("Movie", moviesSchema);

