import *as ActionType from "../types/userInfo"

const initialState = {
    loading: false,
    userInfo: null,
    error: null
}

const UserInfo_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_USERINFO_REQUEST: {
            state.loading = true
            state.userInfo = null
            state.error = null
            return { ...state }
        }
        case ActionType.GET_USERINFO_SUCCESS: {
            state.loading = false
            state.userInfo = action.userInfo
            state.error = null
            return { ...state }
        }
        case ActionType.GET_USERINFO_ERROR: {
            state.loading = false
            state.userInfo = null
            state.error = action.error
            return { ...state }
        }

        case ActionType.UPDATE_PROFILE: {
            return { ...state, userInfo: action.userInfo }
        }
        default:
            return { ...state }
    }
}
export default UserInfo_Reducer