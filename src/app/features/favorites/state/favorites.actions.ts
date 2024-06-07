import { createAction, props } from '@ngrx/store';
import { Character } from 'rickmortyapi';

export const toggleFavorite = createAction(
  '[Favorites] Toggle Favorite',
  props<{ char: Character }>(),
);

export const searchCharacters = createAction(
  '[Favorites] Search Characters',
  props<{ searchString: string }>(),
);

export const searchCharactersSuccess = createAction(
  '[Favorites] Search Characters Succcess]',
  props<{ searchResults: Character[] }>(),
);
