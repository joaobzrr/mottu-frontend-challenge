import { Character } from 'rickmortyapi';

export type FavoritesState = {
  searchResults: Character[];
  favorites: Character[];
  searchString: string;
  loading: boolean;
};
