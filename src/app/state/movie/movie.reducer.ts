import { createReducer, on, Action } from "@ngrx/store";
import * as MoviesActions from "./movie.actions";
import { initialMoviesState, MoviesState } from "./movie.state";

const moviesReducer = createReducer(
    initialMoviesState,
    on(MoviesActions.fetchMoviesSuccess, (state, { movies }) => {
        return {
            ...state,
            movies: movies,
            filteredMovies: movies
        }

    }),
    on(MoviesActions.selectedMovieClicked, (state, { id }) => {
        return {
            ...state,
            selectedMovie: state.movies.find((movie) => movie._id === id)
        };
    }),
    on(MoviesActions.resetMoviesClicked, (state, {}) => {
        return {
            movies: state.movies,
            filteredMovies: state.movies
        };
    }),
    on(MoviesActions.filterMoviesClicked, (state, { genre }) => {
        return {
            ...state,
            filteredMovies: state.movies.filter(m => m.genres.some(v => genre.includes(v)))
        };
    }),

);

export function reducer(state: MoviesState | undefined, action: Action) {
    return moviesReducer(state, action);
}