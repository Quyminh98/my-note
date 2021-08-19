import { combineReducers } from "redux";
import noteReducer from "./noteReducer";
import { firestoreReducer } from "redux-firestore";
import categoryReducer from "./categoryReducer"

const rootReducer = combineReducers({
    note: noteReducer,
    category: categoryReducer,
    firestore: firestoreReducer
})

export default rootReducer;