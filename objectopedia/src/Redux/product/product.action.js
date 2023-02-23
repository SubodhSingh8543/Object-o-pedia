
import * as types from "./product.types";
import { getProductsApi } from "./product.api";

const productRequest = () =>{
    return {type:types.PRODUCT_REQUEST}
};

const productError = ()=>{
    return {type:types.PRODUCT_ERROR}
};

const getProduct =(data)=>{
    return({type:types.GET_PRODUCT_SUCCESS,payload:data})
};

export const getProducts = () =>async (dispatch)=>{
      dispatch(productRequest())
      try{
       let response = await getProductsApi();
       if(response){
        
          dispatch(getProduct(response))
       }
      }
      catch(e){
        dispatch(productError())

      }
}