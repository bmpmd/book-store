import { RemoveBook } from './../book/book.actions';
import { Component } from '@angular/core';
import { Book } from '../models/book';
import { select, Store } from '@ngrx/store';
import { AddBook } from '../book/book.actions';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  books$ : Observable<Book[]> 

  //before using type safety, it was Store<{books: book[]}>
  //after, we use AppState in our global store (appmodule)
  // and fixed the INITIAL state, in our reducer, so that it was a simple book array

  constructor(private store: Store<AppState>){
    this.books$ = store.pipe(select('book'))
  }

  //add book to store 
  addBook(id: string, title: string, author: string){
    this.store.dispatch(AddBook({id, title, author}))

  }

  //remove book from global store 
  removeBook(bookId: string){
    this.store.dispatch(RemoveBook({bookId}))
  }

}
