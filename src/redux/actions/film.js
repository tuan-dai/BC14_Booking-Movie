import api from '../../util/apiUtil'
import *as ActionType from '../types/film'

//GET LIST FILM
export const getListFilm = () => {
    return (dispatch) => {
        dispatch(actGetListFilm_Request())
        api
            .get('QuanLyPhim/LayDanhSachPhim?maNhom=GP01')
            .then(result => dispatch(actGetListFilm_Success(result.data.content)))
            .catch(error => dispatch(actGetListFilm_Error(error)))
    }
}

//DELETE FILM
export const deleteFilm = (maPhim) => {
    return (dispatch) => {
        api
            .delete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
            .then(result => {
                dispatch(actDeleteFilm(result.data.content))
                dispatch(getListFilm())
            })
            .catch(error => console.log(error))
    }
}

//SEARCH FILM
export const searchFilm = (tenPhim) => {
    return (dispatch) => {
        api
            .get(`QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${tenPhim}`)
            .then(result => dispatch(actSearchFilm(result.data.content)))
            .catch(error => console.log(error))
    }
}

//ADD FILM
export const addFilm = (film, history) => {
    return (dispatch) => {
        api
            .post('QuanLyPhim/ThemPhimUploadHinh', film)
            .then(result => {
                dispatch(actAddFilm(result.data.content))
                history.push('/admin/film-management')
            })
            .catch(error => console.log(error))
    }
}

//EDIT FILM
export const editFilm = (film, history) => {
    return (dispatch) => {
        api
            .post('QuanLyPhim/CapNhatPhimUpload', film)
            .then(result => {
                dispatch(actEditFilm(result.data.content))
                history.push('/admin/film-management')
            })
            .catch(error => console.log(error))
    }
}

const actGetListFilm_Request = () => {
    return {
        type: ActionType.GET_LISTFILM_REQUEST,
    }
}
const actGetListFilm_Success = (listFilm) => {
    return {
        type: ActionType.GET_LISTFILM_SUCCESS,
        listFilm
    }
}
const actGetListFilm_Error = (error) => {
    return {
        type: ActionType.GET_LISTFILM_ERROR,
        error
    }
}

const actDeleteFilm = (film) => {
    return {
        type: ActionType.DELETE_FILM,
        film
    }
}

const actSearchFilm = (film) => {
    return {
        type: ActionType.SEARCH_FILM,
        film
    }
}

const actAddFilm = (film) => {
    return {
        type: ActionType.ADD_FILM,
        film
    }
}

const actEditFilm = (film) => {
    return {
        type: ActionType.EDIT_FILM,
        film
    }
}