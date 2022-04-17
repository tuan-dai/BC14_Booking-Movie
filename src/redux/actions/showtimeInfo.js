import api from "../../util/apiUtil";
import { SHOWTIME_INFO } from "../types/showtimeInfo";

export const showtimeInfo = (id) => {
    return (dispatch) => {
        api
            .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
            .then(result => dispatch(actShowtimeInfo(result.data.content)))
            .catch(error => console.log(error))
    }
}

const actShowtimeInfo = (showtime) => {
    return {
        type: SHOWTIME_INFO,
        showtime
    }
}