import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectFavorites,
  selectLoading,
  selectSearchResults,
} from '../../state/favorites.selectors';
import { searchCharacters } from '../../state/favorites.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchResults$ = this.store.select(selectSearchResults);
  favorites$ = this.store.select(selectFavorites);
  loading$ = this.store.select(selectLoading);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(searchCharacters({ searchString: '' }));
  }
}
