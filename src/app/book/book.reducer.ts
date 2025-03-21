import { createReducer, on } from "@ngrx/store";
import { AddBook, RemoveBook } from "./book.actions";
import { Book } from "../models/book";

//import createReducer and on, to do something on an action
//import the actions we are doing something on
//and import the book model 


//export initial empty readonly array

export const initialState : Book[] = []


//export reducer, which uses inital state as first prop and 
// things to do on certain actions as rest of props. 
export const BookReducer = createReducer(
    initialState,
    on(AddBook, 
      (state, {id, title, author}) =>
        [...state, {id, title, author}]
    ),
    on(RemoveBook,
        (state, {bookId}) => state.filter(book=> book.id !== bookId)
    )
    
)