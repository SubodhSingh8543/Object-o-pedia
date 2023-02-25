import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as productReducer } from "./product/product.reducer";
import { cartReducer } from "./Cart/cart.reducer";
import thunk from "redux-thunk";
import { reducer as AdminReducer } from "./AdminRedux/admin.reducer";
import { reducer as AuthReducer } from "./auth/auth.reducer";

import { reducer as SingleProductReducer } from "./SingleProduct/singleProduct.reducer";

import { checkoutReducer } from "./checkout/checkout.reducer";


const rootReducer = combineReducers({
  cartReducer,
  productReducer,
  AdminReducer,

  AuthReducer,
  SingleProductReducer

  checkoutReducer,

});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
