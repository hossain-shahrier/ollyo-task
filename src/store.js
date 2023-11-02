import { combineReducers, legacy_createStore as createStore } from "redux";
import imageReducer from "./services/reducers/imageReducer";

const rootReducer = combineReducers({
    gallery: imageReducer,
});

const store = createStore(rootReducer);

export default store;