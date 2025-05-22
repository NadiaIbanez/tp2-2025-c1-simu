import express from "express";
import { getAllMovies, getMovie, getAllMoviesWithAwardsController, getMoviesByLanguageController, getMoviesOrderedByFreshController } from "../controllers/movieController.js";

const router = express.Router();
router.get("/", getAllMovies);
router.get("/awards", getAllMoviesWithAwardsController);
router.get("/languages", getMoviesByLanguageController);
router.get("/fresh", getMoviesOrderedByFreshController);
router.get("/:id", getMovie);


export default router;