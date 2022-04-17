import api from '../../util/apiUtil'
import *as ActionType from '../types/ticketRoom'

//GET LIST FILM
export const getListTicket = (id) => {
    return (dispatch) => {
        dispatch(actGetListTicket_Request())
        api
            .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
            .then(result => dispatch(actGetListTicket_Success(result.data.content)))
            .catch(error => dispatch(actGetListTicket_Error(error)))
    }
}


const actGetListTicket_Request = () => {
    return {
        type: ActionType.GET_LISTTICKET_REQUEST,
    }
}
const actGetListTicket_Success = (ticketRoom) => {
    return {
        type: ActionType.GET_LISTTICKET_SUCCESS,
        ticketRoom
    }
}
const actGetListTicket_Error = (error) => {
    return {
        type: ActionType.GET_LISTTICKET_ERROR,
        error
    }
}
