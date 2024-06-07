import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { exhaustMap, map, EMPTY, catchError } from 'rxjs';
import { RickMortyService } from 'src/app/shared/services/rick-morty.service';
import { searchCharacters, searchCharactersSuccess } from './favorites.actions';

@Injectable()
export class FavoritesEffects {
  loadCharacters$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchCharacters),
      exhaustMap(({ searchString }) =>
        this.rickAndMortyApiService.getCharactersByName(searchString).pipe(
          map((characters) =>
            searchCharactersSuccess({ searchResults: characters }),
          ),
          catchError(() => EMPTY),
        ),
      ),
    );
  });

  constructor(
    private actions$: Actions,
    private rickAndMortyApiService: RickMortyService,
  ) {}
}
