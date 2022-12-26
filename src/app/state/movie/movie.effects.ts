
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { MovieService } from "src/app/services/movie.service";

import * as MoviesActions from "./movie.actions";


@Injectable()
export class MoviesEffects {
  constructor(private actions$: Actions<any>, private _movieService: MovieService) {}

  fetchMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.appLoaded.type),
      switchMap(() =>
        this._movieService.getMovies().pipe(
          map((movies) =>{
            return MoviesActions.fetchMoviesSuccess({ movies: movies })
          }
          ),
          catchError((error) =>
            of(MoviesActions.fetchMoviesFailed({ error: error }))
          )
        )
      )
    )
  );
}