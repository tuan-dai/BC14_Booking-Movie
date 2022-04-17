import { THEATERGROUPSHOWTIME_INFO } from "../types/theaterGroupShowtime";

const initialState = {
    listTheaterShowtime: null
}

const TheaterGroupShowtimeInfo_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case THEATERGROUPSHOWTIME_INFO: {
            return { ...state, listTheaterShowtime: action.listTheaterShowtime }
        }

        default:
            return { ...state }
    }
}

export default TheaterGroupShowtimeInfo_Reducer