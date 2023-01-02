import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { State } from "./core.state";
import * as MoviesReducer from "./movie/movie.reducer";
import * as MenuReducer from "./menu/menu.reducer";

export const reducers: ActionReducerMap<State> = {
  movies: MoviesReducer.reducer,
  menu: MenuReducer.reducer
};

export const metaReducers: MetaReducer<State>[] = [];