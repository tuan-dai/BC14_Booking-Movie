import { ACCOUNT_INFO } from "../types/accountInfo"

const initialState = {
    accountInfo: null
}

const AccountInfo_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACCOUNT_INFO: {
            return { ...state, accountInfo: action.accountInfo }
        }

        default:
            return { ...state }
    }
}
export default AccountInfo_Reducer