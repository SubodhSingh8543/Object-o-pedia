import * as types from "./auth.types";

const initialState = {
    isLoading: false,
    isError: false,
    allUsers: [],
    singleUser: {}
}

const reducer = (state = initialState, action) => {
    const {type,payload} = action;
    switch(type){
        case types.AUTH_REQUEST : {
            return {...state,isLoading: true};
        }
        case types.AUTH_GET_USERS_SUCCESS : {
            return {...state, isLoading: false, allUsers: payload};
        }
        case types.AUTH_ERROR : {
            return {...state, isLoading: false, isError: true};
        }
        case types.AUTH_GET_SINGLE_USER_SUCCESS : {
            return {...state, isLoading: false, singleUser: payload};
        }
        case types.Auth_POST_SINGLE_USER_SUCCESS : {
            return {...state, isLoading: false, allUsers:[...state.allUsers,payload]};
        }
        default : {
            return state;
        }
    }
}


export {reducer}