import { THEATERGROUP_INFO } from "../types/theaterGroupInfo"

const initialState = {
    theaterGroup: null
}

const TheaterGroupInfo_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case THEATERGROUP_INFO: {
            return { ...state, theaterGroup: action.theaterGroup }
        }

        default:
            return { ...state }
    }
}

export default TheaterGroupInfo_Reducer