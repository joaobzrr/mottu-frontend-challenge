import { createReducer, on } from '@ngrx/store';
import { Character } from 'rickmortyapi';
import {
  searchCharacters,
  searchCharactersSuccess,
  toggleFavorite,
} from './favorites.actions';
import { FavoritesState } from './favorites.state';

export const initialState: FavoritesState = {
  searchResults: [],
  favorites: [],
  searchString: '',
  loading: false,
};

export const favoritesReducer = createReducer(
  initialState,
  on(
    searchCharacters,
    (state, { searchString }): FavoritesState => ({
      ...state,
      searchString,
      loading: true,
    }),
  ),
  on(
    searchCharactersSuccess,
    (state, { searchResults }): FavoritesState => ({
      ...state,
      searchResults,
      loading: false,
    }),
  ),
  on(toggleFavorite, (state, { char }) => {
    const index = state.favorites.findIndex((c) => c.id === char.id);

    let favorites: Character[];
    if (index === -1) {
      favorites = [...state.favorites, char];
    } else {
      favorites = [
        ...state.favorites.slice(0, index),
        ...state.favorites.slice(index + 1),
      ];
    }

    return { ...state, favorites };
  }),
);
