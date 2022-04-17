import { LIST_BANNER } from "../types/listBanner"

const initialState = {
    listBanner: null
}

const ListBanner_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_BANNER: {
            return { ...state, listBanner: action.listBanner }
        }

        default:
            return { ...state }
    }
}

export default ListBanner_Reducer