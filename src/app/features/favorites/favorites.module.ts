import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, type Routes } from '@angular/router';
import { bootstrapHeart, bootstrapHeartFill } from '@ng-icons/bootstrap-icons';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CharGridComponent } from './components/char-grid/char-grid.component';
import { CharGridItemComponent } from './components/char-grid-item/char-grid-item.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FavoriteButtonComponent } from './components/favorite-button/favorite-button.component';

const routes: Routes = [
  { path: 'favoritos', component: FavoritesComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    FavoritesComponent,
    CharGridComponent,
    CharGridItemComponent,
    SearchInputComponent,
    FavoriteButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgIconsModule.withIcons({
      bootstrapHeart,
      bootstrapHeartFill,
    }),
  ],
  exports: [HomeComponent, FavoritesComponent],
})
export class FavoritesModule {}
