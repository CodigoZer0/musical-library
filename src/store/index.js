import rootReducer from "../reducers";
import { createStore, applyMiddleware } from "redux";
import { persistMiddleware } from "../middleware/persistMiddleware";

const store = createStore(rootReducer, applyMiddleware(persistMiddleware));

export default store;