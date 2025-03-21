import { createReducer, on } from "@ngrx/store";
import { AddBook, AddBookFailure, AddBookSuccess, RemoveBook, RemoveBookFailure, RemoveBookSuccess } from "./book.actions";
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
    //pass on state to our effects, which will trigger
    //the two following actions: 
    on(AddBook, 
     (state) => {return state}
    ),

    //on service success, change state
    on(AddBookSuccess, 
        (state, {id, title, author}) =>
            [...state, {id, title, author}]
    ),

    //on service failure, display err and pass on state
    on(AddBookFailure,
        (state, {error}) => {
            console.error(error)
            return state
        }
    ),


    on(RemoveBook,
        (state) => {return state}
    ),
    on (RemoveBookSuccess,
        (state, {bookId}) => state.filter(book => book.id !== bookId)
    ),

    on(RemoveBookFailure,
        (state, {error}) => {
            console.error(error)
            return state
        }
    )


    
    
)