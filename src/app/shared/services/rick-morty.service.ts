import { Injectable } from '@angular/core';
import { from, map } from 'rxjs';
import { getCharacters } from 'rickmortyapi';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  getCharactersByName(name: string) {
    return from(getCharacters({ name })).pipe(
      map((res) => res.data.results ?? []),
    );
  }
}
