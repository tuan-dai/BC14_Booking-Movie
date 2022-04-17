import api from "../../util/apiUtil";
import { TYPE_USER } from "../types/typeUser";

export const getTypeUser = () => {
    return (dispatch) => {
        api
            .get('QuanLyNguoiDung/LayDanhSachLoaiNguoiDung')
            .then(result => dispatch(actGetTypeUser(result.data.content)))
            .catch(error => console.log(error))
    }
}

const actGetTypeUser = (listTypeUser) => {
    return {
        type: TYPE_USER,
        listTypeUser
    }
}