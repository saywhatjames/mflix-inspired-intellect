import { createAction, props } from "@ngrx/store";


export const toggleMenu = createAction(
    "[Menu] Toggle Menu",
    props<{ toggle?: boolean }>()
);
