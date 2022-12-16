import api from "../../util/apiUtil";
import *as ActionType from '../types/ticket'
import {openNotificationWithIcon} from '../../pages/_components/Notification'

// CREATE SHOWTIME
export const createShowtime = (showtime, history) => {
    return (dispatch) => {
        api
            .post('QuanLyDatVe/TaoLichChieu', showtime)
            .then(result => {
                dispatch(actCreateShowtime(result.data.content))
                history.push('/admin/film-management')
            })
            .catch(error => console.log(error))
    }
}

// BOOKING TICKET
export const bookingTicket = (listTicket, history) => {
    return (dispatch) => {
        api
            .post('QuanLyDatVe/DatVe', listTicket)
            .then(result => {
                if(result.status === 200) {
                    dispatch(actBookingTicket(result.data.content))
                    openNotificationWithIcon('success', 'Đặt vé thành công') 
                    history.push('/')
                }
            })
            .catch(error => openNotificationWithIcon('error', 'Vui lòng đăng nhập'))
    }
}

const actCreateShowtime = (showtime) => {
    return {
        type: ActionType.CREATE_SHOWTIME,
        showtime
    }
}

const actBookingTicket = (listTicket) => {
    return {
        type: ActionType.BOOKING_TICKET,
        listTicket
    }
}