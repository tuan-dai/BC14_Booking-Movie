import { THEATER_INFO } from "../types/theaterInfo"

const initialState = {
    theater: null
}

const TheaterInfo_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case THEATER_INFO: {
            return { ...state, theater: action.theater }
        }

        default:
            return { ...state }
    }
}

export default TheaterInfo_Reducer