import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Observable, Subscription } from 'rxjs';
import { Character } from 'rickmortyapi';
import { Store } from '@ngrx/store';
import { selectFavorites } from 'src/app/features/favorites/state/favorites.selectors';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnDestroy {
  private navigationEndSub: Subscription;
  currentRoute = '';

  favorites$!: Observable<Character[]>;

  constructor(
    private router: Router,
    private store: Store,
  ) {
    this.favorites$ = this.store.select(selectFavorites);

    this.navigationEndSub = this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
      )
      .subscribe(this.onNavigationEnd.bind(this));
  }

  ngOnDestroy() {
    this.navigationEndSub.unsubscribe();
  }

  private onNavigationEnd(event: NavigationEnd) {
    this.currentRoute = event.url;
  }
}
