import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  //simple return of obserable of type book
  addBook(book: Book): Observable<Book>{

    //mock err 
    // const err = new Error("error adding book")
    // return throwError(()=> err)
    return of(book)
  }

  removeBook(id:string): Observable<string>{
    return of(id)
  }
}
