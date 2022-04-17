import *as ActionType from '../types/filmInfo'
const initialState = {
    loading: false,
    filmInfo: null,
    error: null
}

const DetailFilm_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_DETAILFILM_REQUEST: {
            state.loading = true
            state.filmInfo = null
            state.error = null
            return { ...state }
        }
        case ActionType.GET_DETAILFILM_SUCCESS: {
            state.loading = false
            state.filmInfo = action.filmInfo
            state.error = null
            return { ...state }
        }
        case ActionType.GET_DETAILFILM_ERROR: {
            state.loading = false
            state.filmInfo = null
            state.error = action.error
            return { ...state }
        }

        default:
            return { ...state };
    }
}
export default DetailFilm_Reducer