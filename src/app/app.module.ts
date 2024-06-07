import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { FavoritesModule } from './features/favorites/favorites.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { FavoritesEffects } from './features/favorites/state/favorites.effects';
import { StoreModule } from '@ngrx/store';
import { favoritesReducer } from './features/favorites/state/favorites.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FavoritesModule,
    StoreModule.forRoot({ favorites: favoritesReducer }),
    EffectsModule.forRoot(FavoritesEffects),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
