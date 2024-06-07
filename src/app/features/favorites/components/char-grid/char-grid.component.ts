import { Component, Input } from '@angular/core';
import { type Character } from 'rickmortyapi';

@Component({
  selector: 'app-char-grid',
  templateUrl: './char-grid.component.html',
  styleUrls: ['./char-grid.component.scss'],
})
export class CharGridComponent {
  @Input() chars!: Character[];
  @Input() favorites!: Character[];

  isFavorite(char: Character) {
    return this.favorites.some(({ id }) => id === char.id);
  }
}
