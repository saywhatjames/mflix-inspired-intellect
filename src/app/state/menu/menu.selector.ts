import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MenuState } from "./menu.state";

export const selectMenu = createFeatureSelector<MenuState>("menu");

export const selectMenus = createSelector(
    selectMenu,
    (state: MenuState) => state.isMenuOpen
  );