import { MenuState } from "./menu";
import {  MoviesState } from "./movie";

export interface State {
    movies: MoviesState;
    menu: MenuState
}