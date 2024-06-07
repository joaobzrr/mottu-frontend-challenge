import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, type Routes } from '@angular/router';
import {
  bootstrapHeartFill,
  bootstrapHouseDoorFill,
} from '@ng-icons/bootstrap-icons';
import { HomeComponent } from '../features/favorites//pages/home/home.component';
import { FavoritesComponent } from '../features/favorites//pages/favorites/favorites.component';
import { NavComponent } from './components/nav/nav.component';
import { NgIconsModule } from '@ng-icons/core';

const routes: Routes = [
  { path: 'favoritos', component: FavoritesComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    NgIconsModule.withIcons({
      bootstrapHouseDoorFill,
      bootstrapHeartFill,
    }),
  ],
  exports: [NavComponent],
})
export class CoreModule {}
