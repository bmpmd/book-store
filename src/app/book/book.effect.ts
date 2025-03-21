import { Injectable } from '@angular/core';
import { BookService } from './book.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as bookActions from './book.actions';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class BookEffect {
  //ngrx effect that responds to addbook actions
  //from all actions
  addBook$ = createEffect(() =>
    this.actions$.pipe(
      //listen for actions of type addbook
      ofType(bookActions.AddBook),

      //and for each Addbook action, call the book service
      mergeMap(action => this.bookService.addBook(action)
        .pipe(
            //if addbook is good, dispatch success action
            
            map(book => bookActions.AddBookSuccess(book)),

            //if the call fails, dispatch fail action ie. observable of 
            catchError(error => of(bookActions.AddBookFailure({error})))


        )
    
      )
    )
  );

  constructor(private actions$: Actions, private bookService: BookService) {}
}
