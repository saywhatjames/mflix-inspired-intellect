import { Movie } from "src/app/models/movie.model";

export interface MoviesState {
    movies: Array<Movie>,
    filteredMovies?: Array<Movie>,
    selectedMovie?: Movie
}

export const initialMoviesState: MoviesState = {
    movies: [],
    filteredMovies: [],
    selectedMovie: undefined
};