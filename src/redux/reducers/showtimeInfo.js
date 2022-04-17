import { SHOWTIME_INFO } from "../types/showtimeInfo"

const initialState = {
    showtime: null
}

const ShowtimeInfo_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOWTIME_INFO: {
            return { ...state, showtime: action.showtime }
        }

        default:
            return { ...state }
    }
}

export default ShowtimeInfo_Reducer