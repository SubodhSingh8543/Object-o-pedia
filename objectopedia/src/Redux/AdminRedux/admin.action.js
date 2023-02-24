import * as types from "./admin.actionTypes";
import { deleteAdminProductAPI, deleteAdminUserDataAPI, getAdminProductAPI, getAdminUserDataAPI, ordersAdminUserDataAPI, postAdminProductAPI, updateAdminProductAPI } from "./admin.api";


const handleAdminGetDataRequest = () => {
    return { type: types.ADMIN_GET_DATA_REQUEST };
}

const handleAdminGetDataSuccess = (payload) => {
    return { type: types.ADMIN_GET_DATA_SUCCESS, payload };
}

const handleAdminGetDataError = () => {
    return { type: types.ADMIN_GET_DATA_FAILURE };
}

const handleAdminPostDataRequest = () => {
    return { type: types.ADMIN_POST_DATA_REQUEST };
}

const handleAdminPostDataSuccess = (payload) => {
    return { type: types.ADMIN_POST_DATA_SUCCESS, payload };
}

const handleAdminPostDataError = () => {
    return { type: types.ADMIN_POST_DATA_FAILURE};
}

const handleAdminDeleteRequest = () => {
    return {type: types.ADMIN_DELETE_DATA_REQUEST};
}

const handleAdminDeleteSuccess = (payload) => {
    return {type: types.ADMIN_DELETE_DATA_SUCCESS, payload };
}

const handleAdminDeleteError = () => {
    return {type: types.Admin_DELETE_DATA_FAILURE};
}

const handleAdminUpdateRequest = () => {
    return {type: types.ADMIN_UPDATE_DATA_REQUEST};
}

const handleAdminUpdateSuccess = (payload) => {
    return {type: types.ADMIN_UPDATE_DATA_SUCCESS,payload}
}

const handleAdminUpdateError = () => {
    return {type: types.Admin_UPDATE_DATA_FAILURE}
}

const handleAdminUsersRequest = () => {
    return {type: types.ADMIN_USERS_DATA_REQUEST};
}

const handleAdminUsersSuccess = (payload) => {
    return {type: types.ADMIN_USERS_DATA_SUCCESS,payload}
}

const handleAdminUsersFailure = () => {
    return {type: types.Admin_USERS_DATA_FAILURE}
}

const handleAdminDeleteUserRequest = () => {
    return {type: types.ADMIN_REQUEST};
}

const handleAdminDeleteUserSuccess = (payload) => {
    return {type: types.ADMIN_USERS_DELETE_DATA_SUCCESS,payload};
}

const handleAdminDeleteUsersFailure = () => {
    return {type: types.ADMIN_FAILURE};
}

const handleAdminRequest = () => {
    return {type: types.ADMIN_REQUEST};
}

const handleAdminOrdersSuccess = (payload) => {
    return {type: types.ADMIN_USER_ORDER_SUCCESS,payload};
}

const handleAdminFailure = () => {
    return {type: types.ADMIN_FAILURE};
}

const getAdminDataProduct = (payload) => async (dispatch) => {
    dispatch(handleAdminGetDataRequest());

    try {
        let res = await getAdminProductAPI(payload);
        if (res.data) {
            dispatch(handleAdminGetDataSuccess(res.data));
            return res.totalPages;
        }
    } catch (error) {
        dispatch(handleAdminGetDataError());
    }
}

const postAdminDataProduct = (payload) => async (dispatch) => {
    dispatch(handleAdminPostDataRequest());
  
    try {
      let res = await  postAdminProductAPI(payload);
      if(res){
          dispatch(handleAdminPostDataSuccess(res));
        return res;
      }
    } catch (error) {
      dispatch(handleAdminPostDataError());
    }
}

const deleteAdminDataProduct = (id) => async (dispatch) => {
    dispatch(handleAdminDeleteRequest());
    try {
        let res = await deleteAdminProductAPI(id);
        if(res){
            // console.log(res);
            dispatch(handleAdminDeleteSuccess(id));
        }
    } catch (error) {
        dispatch(handleAdminDeleteError());
    }
}

const updateAdminDataProduct = (id,payload) => async (dispatch) => {
    dispatch(handleAdminUpdateRequest());
    try {
        let res = await updateAdminProductAPI(id,payload);
        if(res){
            console.log(res);
            dispatch(handleAdminUpdateSuccess(res));
        }
    } catch (error) {
           dispatch(handleAdminUpdateError());
    }
}

const getUserAdminData = () =>async (dispatch) => {
    dispatch(handleAdminUsersRequest());

    try {
        let res = await getAdminUserDataAPI();

        if(res){
            dispatch(handleAdminUsersSuccess(res));
        }
    } catch (error) {
        dispatch(handleAdminUsersFailure());
    }
}

const deleteUserAdminData = (id) => async (dispatch) =>{
   dispatch(handleAdminDeleteUserRequest());

   try {
    let res = await deleteAdminUserDataAPI(id);

    if(res){
        dispatch(handleAdminDeleteUserSuccess(id));
    }
   } catch (error) {
       dispatch(handleAdminDeleteUsersFailure());
   }
}


const ordersAdminData = () => async (dispatch) => {
    dispatch(handleAdminRequest());

    try {
        let res = await ordersAdminUserDataAPI();
        if(res){
            dispatch(handleAdminOrdersSuccess(res));
        }
    } catch (error) {
           dispatch(handleAdminFailure());
    }
}

export {handleAdminRequest,handleAdminFailure,handleAdminOrdersSuccess,ordersAdminData,handleAdminDeleteUserRequest,handleAdminDeleteUserSuccess,handleAdminDeleteUsersFailure,deleteUserAdminData, handleAdminUsersFailure,handleAdminUsersRequest,handleAdminUsersSuccess,getUserAdminData, handleAdminUpdateRequest,handleAdminUpdateSuccess,handleAdminUpdateError,updateAdminDataProduct,deleteAdminDataProduct, handleAdminDeleteError,handleAdminDeleteRequest,handleAdminDeleteSuccess,handleAdminPostDataError,handleAdminPostDataRequest,handleAdminPostDataSuccess,handleAdminGetDataError, handleAdminGetDataRequest, handleAdminGetDataSuccess, getAdminDataProduct,postAdminDataProduct};