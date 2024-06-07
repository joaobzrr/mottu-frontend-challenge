import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounce } from 'lodash';
import { searchCharacters } from '../../state/favorites.actions';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  search = '';

  constructor(private store: Store) {
    this.submitSearch = debounce(this.submitSearch.bind(this), 500);
  }

  onInput(event: Event) {
    this.submitSearch((event.currentTarget as HTMLInputElement).value);
  }

  submitSearch(value: string) {
    this.store.dispatch(searchCharacters({ searchString: value }));
  }
}
