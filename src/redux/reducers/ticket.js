import *as ActionType from '../types/ticket'

const initialState = {
    showtime: null,
    listTicket: null
}

const Ticket_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.CREATE_SHOWTIME: {
            return { ...state, showtime: action.showtime }
        }

        case ActionType.BOOKING_TICKET: {
            return { ...state, listTicket: action.listTicket }
        }

        default:
            return { ...state };
    }
}
export default Ticket_Reducer