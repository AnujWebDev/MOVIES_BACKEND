import express  from "express";
import mongoose from "mongoose";
import moviesRouter from "./Routes/movies.js"
import bodyparser from "express";
import { config } from "dotenv";

const app = express();
app.use(bodyparser.json());

config({
    path:'.env'
})
//mongoDB connected
mongoose.connect(process.env.MONGO_URL,
{
    dbName:'MoviesDB'
})
.then(()=>{
    console.log('MongoDB connected');
})


//connecting home route

app.use('/api',moviesRouter);

app.listen(process.env.PORT,console.log(`Server started on ${process.env.PORT}....`));