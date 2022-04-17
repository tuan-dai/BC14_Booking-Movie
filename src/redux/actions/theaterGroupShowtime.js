import api from "../../util/apiUtil";
import { THEATERGROUPSHOWTIME_INFO } from "../types/theaterGroupShowtime";

export const theaterGroupShowTimeInfo = (id) => {
    return (dispatch) => {
        api
            .get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`)
            .then(result => dispatch(actTheaterGroupShowtime_Info(result.data.content)))
            .catch(error => console.log(error))
    }
}

const actTheaterGroupShowtime_Info = (listTheaterShowtime) => {
    return {
        type: THEATERGROUPSHOWTIME_INFO,
        listTheaterShowtime
    }
}