import { Book } from "./models/book";

export interface AppState {

    //our app state will contain this immutably.
    readonly book: Book[]
}
