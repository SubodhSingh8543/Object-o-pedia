import * as types from "./product.types";

const initState = {
    loading:false,
    error:false,
    product:[]
}

export const reducer = (state=initState,action)=>{

    switch(action.type){
        case types.PRODUCT_REQUEST:{
            return {...state,loading:true}
        }
        case types.PRODUCT_ERROR:{
            return {...state,loading:false,error:false}
        }
        case types.GET_PRODUCT_SUCCESS:{
            return {...state,product:action.payload,loading:false}
        }
        default:{
            return state;
        }
    }
}