import api from "../../util/apiUtil";
import *as ActionType from '../types/user'

//SIGN IN
export const signIn = (userInfo, history) => {
    return (dispatch) => {
        api
            .post('QuanLyNguoiDung/DangNhap', userInfo)
            .then(result => {
                dispatch(actSignIn(result.data.content))
                // Luu xuong localStorage
                localStorage.setItem('USER_LOGIN', JSON.stringify(result.data.content))

                //Chuyen huong trang
                const _userInfo = localStorage.getItem('USER_LOGIN')
                if (JSON.parse(_userInfo).maLoaiNguoiDung === 'QuanTri') {
                    history.replace('/admin/dashboard')
                } else {
                    history.push('/')
                }
            })
            .catch(error => console.log(error))
    }
}

//SIGN UP
export const signUp = (userInfo, history) => {
    return (dispatch) => {
        api
            .post('QuanLyNguoiDung/DangKy', userInfo)
            .then(result => {
                dispatch(actSignUp(result.data.content))
                history.push('/')
            })
            .catch(error => console.log(error))
    }
}

//GET LIST USER
export const getListUser = () => {
    return (dispatch) => {
        dispatch(actGetListUser_Request())
        api
            .get('QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01')
            .then(result => dispatch(actGetListUser_Success(result.data.content)))
            .catch(error => dispatch(actGetListUser_Error(error)))
    }
}

//SEARCH USER
export const searchUser = (keyword) => {
    return (dispatch) => {
        api
            .get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01&tuKhoa=${keyword}`)
            .then(result => dispatch(actSearchUser(result.data.content)))
            .catch(error => console.log(error))
    }
}

// DELETE USER
export const deleteUser = (id) => {
    return (dispatch) => {
        api
            .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`)
            .then(result => {
                dispatch(actDeleteUser(result.data.content))
                dispatch(getListUser())
            })
            .catch(error => console.log(error))
    }
}

//ADD USER
export const addUser = (user, history) => {
    return (dispatch) => {
        api
            .post('QuanLyNguoiDung/ThemNguoiDung', user)
            .then(result => {
                dispatch(actAddUser(result.data.content))
                history.push('/admin/user-management')
            })
            .catch(error => console.log(error))
    }
}

//EDIT USER
export const editUser = (user, history) => {
    return (dispatch) => {
        api
            .post('QuanLyNguoiDung/CapNhatThongTinNguoiDung', user)
            .then(result => {
                dispatch(actEditUser(result.data.content))
                history.push('/admin/user-management')
            })
            .catch(error => console.log(error))
    }
}

const actSignIn = (userInfo) => {
    return {
        type: ActionType.SIGNIN,
        userInfo
    }
}

const actSignUp = (userInfo) => {
    return {
        type: ActionType.SIGNUP,
        userInfo
    }
}

const actGetListUser_Request = () => {
    return {
        type: ActionType.LISTUSER_REQUEST,
    }
}
const actGetListUser_Success = (listUser) => {
    return {
        type: ActionType.LISTUSER_SUCCESS,
        listUser
    }
}
const actGetListUser_Error = (error) => {
    return {
        type: ActionType.LISTUSER_ERROR,
        error
    }
}

const actSearchUser = (user) => {
    return {
        type: ActionType.SEARCH_USER,
        user
    }
}

const actDeleteUser = (user) => {
    return {
        type: ActionType.DELETE_USER,
        user
    }
}

const actAddUser = (user) => {
    return {
        type: ActionType.ADD_USER,
        user
    }
}

const actEditUser = (user) => {
    return {
        type: ActionType.EDIT_USER,
        user
    }
}