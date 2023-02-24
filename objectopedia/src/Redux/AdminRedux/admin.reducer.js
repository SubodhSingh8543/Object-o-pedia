import * as types from "./admin.actionTypes";

const initialState = {
    isLoading: false,
    productData: [],
    isError: false,
    users: [],
    orders: []
}

const reducer = (state = initialState , action) => {
   
    const {type,payload} = action;
    
    switch(type){
        case types.ADMIN_GET_DATA_REQUEST : {
            return {...state,isLoading: true};
        }
        case types.ADMIN_GET_DATA_SUCCESS : {
            // console.log(action);
            return {...state, isLoading: false, productData: payload};
        }
        case types.ADMIN_GET_DATA_FAILURE : {
            return {...state, isLoading: false,isError: true};
        }
        case types.ADMIN_POST_DATA_REQUEST : {
            return {...state, isLoading: true}
        }
        case types.ADMIN_POST_DATA_SUCCESS : {
            return {...state, isLoading: false, productData: [payload,...state.productData]}
        }
        case types.ADMIN_POST_DATA_FAILURE : {
            return {...state, isLoading: false, isError: true};
        }
        case types.ADMIN_DELETE_DATA_REQUEST : {
            return {...state, isLoading: true}
        }
        case types.ADMIN_DELETE_DATA_SUCCESS : {
            return {...state, isLoading: false, productData: state.productData.filter((el) => el.id !== payload ) }
        }
        case types.Admin_DELETE_DATA_FAILURE : {
            return {...state, isLoading: false, isError: false};
        }
        case types.ADMIN_UPDATE_DATA_REQUEST : {
            return {...state, isLoading: true};
        }
        case types.ADMIN_UPDATE_DATA_SUCCESS : {
            return {...state, isLoading: false, productData: state.productData.map((el) => el.id === payload.id ? {...el,...payload}: el)}
        }
        case types.Admin_UPDATE_DATA_FAILURE : {
            return {...state, isLoading: false, isError:true};
        }
        
        // for getting users data 
        case types.ADMIN_USERS_DATA_REQUEST : {
            return {...state, isLoading: true};
        }
        case types.ADMIN_USERS_DATA_SUCCESS : {
            return {...state, isLoading: false, users: payload};
        }
        case types.Admin_USERS_DATA_FAILURE: {
            return {...state, isLoading: false, isError:true};
        }

         // for deleting users data 
        case types.ADMIN_REQUEST : {
            return {...state, isLoading: true};
        }
        case types.ADMIN_USERS_DELETE_DATA_SUCCESS : {
            return {...state, isLoading: false, users: state.users.filter((el) => el.id !== payload)};
        }
        case types.ADMIN_FAILURE: {
            return {...state, isLoading: false, isError:true};
        }

        // for orders users data 
        case types.ADMIN_REQUEST : {
            return {...state, isLoading: true};
        }
        case types.ADMIN_USER_ORDER_SUCCESS : {
            return {...state, isLoading: false, orders: payload };
        }
        case types.ADMIN_FAILURE: {
            return {...state, isLoading: false, isError:true};
        }

        default :{
            return state;
        }
    }
}

export {reducer};
