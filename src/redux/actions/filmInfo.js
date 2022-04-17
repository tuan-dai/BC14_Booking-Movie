import api from "../../util/apiUtil"
import *as ActionType from '../types/filmInfo'

//GET DETAIL FILM
export const getDetailFilm = (maPhim) => {
    return (dispatch) => {
        dispatch(actGetDeatailFilm_Request())
        api
            .get(`QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
            .then(result => dispatch(actGetDeatailFilm_Success(result.data.content)))
            .catch(error => dispatch(actGetDeatailFilm_Error(error)))
    }
}

const actGetDeatailFilm_Request = () => {
    return {
        type: ActionType.GET_DETAILFILM_REQUEST,
    }
}
const actGetDeatailFilm_Success = (filmInfo) => {
    return {
        type: ActionType.GET_DETAILFILM_SUCCESS,
        filmInfo
    }
}
const actGetDeatailFilm_Error = (error) => {
    return {
        type: ActionType.GET_DETAILFILM_ERROR,
        error
    }
}