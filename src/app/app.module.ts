import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BookReducer } from './book/book.reducer';
import { BookListComponent } from './book-list/book-list.component';
import { AppState } from './app.state';
import { BookEffect } from './book/book.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //whats here, the name and type, the name must 
    //match what's in the app state since we have type safety. 
    StoreModule.forRoot<AppState>({book: BookReducer}, {}),
    EffectsModule.forRoot([BookEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
