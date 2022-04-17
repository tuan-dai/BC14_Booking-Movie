import api from "../../util/apiUtil";
import { LIST_BANNER } from "../types/listBanner";

export const getListBanner = () => {
    return (dispatch) => {
        api
            .get(`QuanLyPhim/LayDanhSachBanner`)
            .then(result => dispatch(actListBanner(result.data.content)))
            .catch(error => console.log(error))
    }
}

const actListBanner = (listBanner) => {
    return {
        type: LIST_BANNER,
        listBanner
    }
}