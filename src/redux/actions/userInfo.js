import api from "../../util/apiUtil";
import *as ActionType from "../types/userInfo";

//GET USER INFO
export const getUserInfo = (id, userInfo) => {
    return (dispatch) => {
        dispatch(actGetUserInfo_Request())
        api
            .post(`QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${id}`, userInfo)
            .then(result => dispatch(actGetUserInfo_Success(result.data.content)))
            .catch(error => dispatch(actGetUserInfo_Error(error)))
    }
}

//UPDATE USER PROFILE
export const updateProfile = (userInfo, history) => {
    return (dispatch) => {
        api
            .put('QuanLyNguoiDung/CapNhatThongTinNguoiDung', userInfo)
            .then(result => {
                dispatch(actUpdateProfile(result.data.content))
                history.push('/')
            })
            .catch(error => console.log(error))
    }
}

const actGetUserInfo_Request = () => {
    return {
        type: ActionType.GET_USERINFO_REQUEST,
    }
}
const actGetUserInfo_Success = (userInfo) => {
    return {
        type: ActionType.GET_USERINFO_SUCCESS,
        userInfo
    }
}
const actGetUserInfo_Error = (error) => {
    return {
        type: ActionType.GET_USERINFO_ERROR,
        error
    }
}

const actUpdateProfile = (userInfo) => {
    return {
        type: ActionType.UPDATE_PROFILE,
        userInfo
    }
}