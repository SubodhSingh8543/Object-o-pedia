
import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {reducer as productReducer} from "./product/product.reducer"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
  
    productReducer,
})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk))


export {store};