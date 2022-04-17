const initialState = {
    listBookingSeat: [],
    total: 0
}

const BookingSeat_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKING_SEAT': {
            let newListSeat = [...state.listBookingSeat]
            const index = newListSeat.findIndex(item => item.maGhe === action.seat.maGhe)
            if (index !== -1) {
                newListSeat.splice(index, 1)
            } else {
                newListSeat.push(action.seat)
            }
            state.listBookingSeat = newListSeat

            state.total = newListSeat.reduce((total, item) => {
                total = total + item.giaVe
                return total
            }, 0)
            return { ...state }
        }

        default:
            return { ...state }
    }
}
export default BookingSeat_Reducer