import { createAction, props } from "@ngrx/store";
import { Movie } from "src/app/models/movie.model";

export const appLoaded = createAction("[App] App Loaded");

export const fetchMoviesSuccess = createAction(
    "[Movies API] Fetch Menu Success",
    props<{ movies: Movie[] }>()
);

export const fetchMoviesFailed = createAction(
    "[Movies API] Fetch Menu Failed",
    props<{ error: any }>()
);

export const selectedMovieClicked = createAction(
    "[Movies] Movie Selected",
    props<{ id: string }>()
);


export const filterMoviesClicked = createAction(
    "[Movies] Filter Movies",
    props<{ genre: string }>()
);

export const resetMoviesClicked = createAction(
    "[Movies] Reset Movies",
    props<{ genre?: string }>()
);


