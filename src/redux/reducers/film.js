import *as ActionType from '../types/film'
const initialState = {
    loading: false,
    listFilm: null,
    film: null,
    error: null
}

const Film_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_LISTFILM_REQUEST: {
            state.loading = true
            state.listFilm = null
            state.error = null
            return { ...state }
        }
        case ActionType.GET_LISTFILM_SUCCESS: {
            state.loading = false
            state.listFilm = action.listFilm
            state.error = null
            return { ...state }
        }
        case ActionType.GET_LISTFILM_ERROR: {
            state.loading = false
            state.listFilm = null
            state.error = action.error
            return { ...state }
        }

        case ActionType.DELETE_FILM: {
            return { ...state, film: action.film }
        }

        case ActionType.SEARCH_FILM: {
            return { ...state, listFilm: action.film }
        }

        case ActionType.ADD_FILM: {
            return { ...state, film: action.film }
        }

        case ActionType.EDIT_FILM: {
            return { ...state, film: action.film }
        }
        default:
            return { ...state };
    }
}
export default Film_Reducer