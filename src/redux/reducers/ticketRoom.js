import *as ActionType from '../types/ticketRoom'
const initialState = {
    loading: false,
    ticketRoom: null,
    error: null
}

const ListTicket_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_LISTTICKET_REQUEST: {
            state.loading = true
            state.ticketRoom = null
            state.error = null
            return { ...state }
        }
        case ActionType.GET_LISTTICKET_SUCCESS: {
            state.loading = false
            state.ticketRoom = action.ticketRoom
            state.error = null
            return { ...state }
        }
        case ActionType.GET_LISTTICKET_ERROR: {
            state.loading = false
            state.ticketRoom = null
            state.error = action.error
            return { ...state }
        }

        default:
            return { ...state };
    }
}
export default ListTicket_Reducer