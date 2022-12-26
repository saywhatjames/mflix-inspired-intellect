import { createReducer, on, Action } from "@ngrx/store";
import { initialMenuState, MenuState } from "./menu.state";
import * as MenuActions from "./menu.actions";

const menuReducer = createReducer(
    initialMenuState,
    on(MenuActions.toggleMenu, (state, {}) => {
        return {
            isMenuOpen: !state.isMenuOpen
        }
    })

);

export function reducer(state: MenuState | undefined, action: Action) {
    return menuReducer(state, action);
}