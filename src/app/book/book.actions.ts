import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book';

export const AddBook = 
    createAction('[Book] Add Book', props<Book>());
export const AddBookSuccess = 
    createAction("[Book] Add Book Success", props<Book>())
export const AddBookFailure = 
    createAction("[Book] Add Book Failure", props<{error: any}>())

export const RemoveBook = 
    createAction("[Book] Remove Book", props<{bookId:string}>())

export const RemoveBookSuccess = 
    createAction("[Book] Remove book success", props<{bookId: string}>())

export const RemoveBookFailure = 
    createAction("[Book] Remove book failure", props<{error: any}>())