import { getDb } from "./connection.js";
import { ObjectId } from "mongodb";

export async function findAllMovies(page, pageSize) {
    const db = getDb();
    if (page && pageSize) {
        const skip = (page - 1) * pageSize;
        const movies = await db.collection("movies")
            .find()
            .skip(skip)    //cantidad de documento a saltar
            .limit(pageSize)
            .toArray();
        return movies;
    } else {
        // Sin paginación: trae todas las películas
        const movies = await db.collection("movies").find().toArray();
        return movies;
    }
}

export async function findMovieById(id) {
    const db = getDb();
    const movie = await db.collection("movies").findOne({ _id: new ObjectId(id) });
    return movie;
}

export async function findAllMoviesWithAwards(){
    const db = getDb();
    const movies = await db.collection("movies")
           .find({"awards.wins": {$gt: 0}})   //q hallan ganado al menos 1 premio, osea mas de 0
           .project({title: 1, poster: 1, plot: 1, _id: 1})    //solo con los campos necesarios, osea q campos quiero q devuelva 1=si 0=no
           .toArray();           //genera el array
    return movies;

}

export async function findMoviesByLanguage(language, page, pageSize) {
    const db = getDb();
    const skip = (page -1) * pageSize;

    const movies = await db.collection("movies")
                   .find({languages : language})
                   .skip(skip)
                   .limit(pageSize)
                   .toArray();
    return movies;
   
}

export async function findMoviesOrderedByFresh(){
    const db = getDb();
    const movies = await db.collection("movies")
                   .find()               //{ "tomatoes.fresh": { $exists: true } } adentro del find para solo agarrar las peliculas q si tengan fresh
                   .limit(100)            //le doy un limite de peliculas pq sino excede la memoria
                   .sort({"tomatoes.fresh": -1})  //orden descendente de mayor a menor
                   .toArray();

    return movies;

}