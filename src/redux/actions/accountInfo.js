import api from "../../util/apiUtil";
import { ACCOUNT_INFO } from "../types/accountInfo";

export const getAccountInfo = (accountInfo) => {
    return (dispatch) => {
        api
            .post('QuanLyNguoiDung/ThongTinTaiKhoan', accountInfo)
            .then(result => dispatch(actGetAccountInfo(result.data.content)))
            .catch(error => console.log(error))
    }
}

const actGetAccountInfo = (accountInfo) => {
    return {
        type: ACCOUNT_INFO,
        accountInfo
    }
}