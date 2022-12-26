import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieComponent } from './components/movie/movie.component';
import { SliderComponent } from './components/slider/slider.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { metaReducers, reducers } from './state';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './state/movie';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    SliderComponent,
    HeaderComponent,
    SideMenuComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([MoviesEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
