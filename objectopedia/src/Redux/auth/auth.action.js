import { getSingleUserDataAPI, getUserDataAPI, postSingleUserDataAPI } from "./auth.api";
import * as types from "./auth.types";


export const handleGetUsersRequest = () => {
    return {type: types.AUTH_REQUEST};
}

export const handleGetUsersSuccess = (payload) => {
   return {type: types.AUTH_GET_USERS_SUCCESS,payload};
}

export const handleGetUsersError = () => {
    return {type: types.AUTH_ERROR};
}

export const handleGetSingleUserData = (payload) => {
    return {type: types.AUTH_GET_SINGLE_USER_SUCCESS,payload};
}

export const handlePostSingleUserData = (payload) => {
    return {type: types.Auth_POST_SINGLE_USER_SUCCESS,payload};
}

export const getUsersData = () => async (dispatch) => {
    dispatch(handleGetUsersRequest());

    try {
        let res = await getUserDataAPI();
         if(res){
            dispatch(handleGetUsersSuccess(res));
         }
    } catch (error) {
        dispatch(handleGetUsersError())
    }

}

export const getSingleUserData = (id) => async (dispatch) => {
    dispatch(handleGetUsersRequest());

    try {
        let res = await getSingleUserDataAPI(id);
         if(res){
            dispatch(handleGetSingleUserData(res));
         }
    } catch (error) {
        dispatch(handleGetUsersError())
    }

}

export const postSingleUserData = (payload) => async (dispatch) => {
    dispatch(handleGetUsersRequest());

    try {
        let res = await postSingleUserDataAPI(payload);
         if(res){
            dispatch(handlePostSingleUserData(res));
         }
    } catch (error) {
        dispatch(handleGetUsersError())
    }

}
