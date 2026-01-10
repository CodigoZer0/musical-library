import { combineReducers } from "redux";
import modify_playlist from "./modify_playlist";


const rootReducer = combineReducers({
    modify_playlist: modify_playlist,
})

export default rootReducer;