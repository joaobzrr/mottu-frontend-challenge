import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavoritesState } from './favorites.state';

export const selectFavoritesState =
  createFeatureSelector<FavoritesState>('favorites');

export const selectSearchResults = createSelector(
  selectFavoritesState,
  (state) => state.searchResults,
);

export const selectFavorites = createSelector(
  selectFavoritesState,
  (state) => state.favorites,
);

export const selectSearchString = createSelector(
  selectFavoritesState,
  (state) => state.searchString,
);

export const selectLoading = createSelector(
  selectFavoritesState,
  (state) => state.loading,
);
