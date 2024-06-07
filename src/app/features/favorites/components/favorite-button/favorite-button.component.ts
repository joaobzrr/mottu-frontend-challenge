import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss'],
})
export class FavoriteButtonComponent {
  @Input() on?: boolean;
  @Output() clicked = new EventEmitter();

  onClicked() {
    this.clicked.emit();
  }
}
