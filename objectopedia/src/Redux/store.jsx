import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as productReducer } from "./product/product.reducer";
import { cartReducer } from "./Cart/cart.reducer";
import thunk from "redux-thunk";
import {reducer as AdminReducer} from "./AdminRedux/admin.reducer";

const rootReducer = combineReducers({
  cartReducer,
  productReducer,
  AdminReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
