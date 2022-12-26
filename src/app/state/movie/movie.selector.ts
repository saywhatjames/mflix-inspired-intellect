import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MoviesState } from "./movie.state";


export const selectMovie = createFeatureSelector<MoviesState>("movies");

export const selectMovies = createSelector(
    selectMovie,
    (state: MoviesState) => state.filteredMovies
);

export const selectSelectedMovie = createSelector(
    selectMovie,
    (state: MoviesState) => {
        return state.selectedMovie
    }
);

