import { TYPE_USER } from "../types/typeUser"

const initialState = {
    listTypeUser: null
}

const ListTypeUser_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE_USER: {
            return { ...state, listTypeUser: action.listTypeUser }
        }

        default:
            return { ...state }
    }
}
export default ListTypeUser_Reducer
