import api from "../../util/apiUtil";
import { THEATERGROUP_INFO } from "../types/theaterGroupInfo";

export const theaterGroupInfo = (id) => {
    return (dispatch) => {
        api
            .get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`)
            .then(result => dispatch(actTheaterGroupInfo(result.data.content)))
            .catch(error => console.log(error))
    }
}

const actTheaterGroupInfo = (theaterGroup) => {
    return {
        type: THEATERGROUP_INFO,
        theaterGroup
    }
}