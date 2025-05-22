import { findAllMovies, findMovieById, findAllMoviesWithAwards, findMoviesByLanguage, findMoviesOrderedByFresh } from "../data/movieData.js";

export const getMovies = async (page, pageSize) => {
    return await findAllMovies(page, pageSize);
}

export const getMovieById = async (id) => {
    return await findMovieById(id);
}

export const getMoviesWithAwards = async () => {
    return await findAllMoviesWithAwards();
}

export const getMoviesByLanguage = async (language, page, pageSize) => {
    return await findMoviesByLanguage(language, page, pageSize);
}

export const getMoviesOrderedByFresh = async () =>{
    return await findMoviesOrderedByFresh();
}
