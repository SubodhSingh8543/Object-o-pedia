import { async } from "@firebase/util";
import * as types from "./singleProduct.actionTypes";
import { getSingleProductAPI } from "./singleProduct.api";

export const handleSingleProductRequest = () => {
   return{type: types.SINGLE_PRODUCT_REQUEST };
}

export const handleSingleProductSuccess = (payload) => {
    return{type: types.SINGLE_PRODUCT_SUCCESS,payload };
}

export const handleSingleProductError = () => {
    return {type: types.SINGLE_PRODUCT_ERROR};
}

export const getSingleProductData = (id) => async (dispatch) => {

    dispatch(handleSingleProductRequest());

    try {
        let res = await getSingleProductAPI(id);
        if(res){
            console.log(res)
            dispatch(handleSingleProductSuccess(res));
        }
    } catch (error) {
        dispatch(handleSingleProductError());
    }

}