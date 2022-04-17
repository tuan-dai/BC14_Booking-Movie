import api from "../../util/apiUtil";
import { THEATER_INFO } from "../types/theaterInfo";

export const theaterInfo = () => {
    return (dispatch) => {
        api
            .get(`QuanLyRap/LayThongTinHeThongRap`)
            .then(result => dispatch(actTheaterInfo(result.data.content)))
            .catch(error => console.log(error))
    }
}

const actTheaterInfo = (theater) => {
    return {
        type: THEATER_INFO,
        theater
    }
}