import *as ActionType from '../types/user'

const initialState = {
    loading: false,
    listUser: null,
    userInfo: null,
    error: null
}

const User_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SIGNIN: {
            return { ...state, userInfo: action.userInfo }
        }

        case ActionType.SIGNUP: {
            return { ...state, userInfo: action.userInfo }
        }

        case ActionType.LISTUSER_REQUEST: {
            state.loading = true
            state.listUser = null
            state.error = null
            return { ...state }
        }
        case ActionType.LISTUSER_SUCCESS: {
            state.loading = false
            state.listUser = action.listUser
            state.error = null
            return { ...state }
        }
        case ActionType.LISTUSER_ERROR: {
            state.loading = false
            state.listUser = null
            state.error = action.error
            return { ...state }
        }
        case ActionType.SEARCH_USER: {
            return { ...state, userInfo: action.user }
        }

        case ActionType.DELETE_USER: {
            return { ...state, userInfo: action.user }
        }

        case ActionType.ADD_USER: {
            return { ...state, userInfo: action.user }
        }

        case ActionType.EDIT_USER: {
            return { ...state, userInfo: action.user }
        }
        default:
            return { ...state };
    }
}
export default User_Reducer
