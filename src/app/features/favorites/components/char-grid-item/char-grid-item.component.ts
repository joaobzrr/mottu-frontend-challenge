import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { type Character } from 'rickmortyapi';
import { toggleFavorite } from '../../state/favorites.actions';

@Component({
  selector: 'app-char-grid-item',
  templateUrl: './char-grid-item.component.html',
  styleUrls: ['./char-grid-item.component.scss'],
})
export class CharGridItemComponent {
  @Input() char!: Character;
  @Input() isFavorite!: boolean;

  constructor(private store: Store) {}

  toggleFavorite() {
    this.store.dispatch(toggleFavorite({ char: this.char }));
  }
}
