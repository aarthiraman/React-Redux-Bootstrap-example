import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || {};
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
