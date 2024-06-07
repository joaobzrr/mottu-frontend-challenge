import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFavorites } from '../../state/favorites.selectors';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  favorites$ = this.store.select(selectFavorites);

  constructor(private store: Store) {}
}
