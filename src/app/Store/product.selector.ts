import { AppState } from './app.state';
import { createSelector } from "@ngrx/store";

export const ProductSelector  = (state:AppState) => state.products;
