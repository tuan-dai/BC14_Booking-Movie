import { combineReducers } from "redux";
import Film_Reducer from "./reducers/film";
import DetailFilm_Reducer from "./reducers/filmInfo";
import TheaterInfo_Reducer from "./reducers/theaterInfo";
import TheaterGroupInfo_Reducer from "./reducers/theaterGroupInfo";
import TheaterGroupShowtimeInfo_Reducer from "./reducers/theaterGroupShowtime";
import ShowtimeInfo_Reducer from "./reducers/showtimeInfo";
import Ticket_Reducer from "./reducers/ticket";
import ListTicket_Reducer from "./reducers/ticketRoom";
import BookingSeat_Reducer from "./reducers/bookingSeat";
import ListBanner_Reducer from "./reducers/listBanner";

import User_Reducer from "./reducers/user";
import ListTypeUser_Reducer from "./reducers/typeUser";
import UserInfo_Reducer from "./reducers/userInfo";
import AccountInfo_Reducer from "./reducers/accountInfo";

const rootReducer = combineReducers({
    Film_Reducer,
    DetailFilm_Reducer,
    TheaterInfo_Reducer,
    TheaterGroupInfo_Reducer,
    TheaterGroupShowtimeInfo_Reducer,
    ShowtimeInfo_Reducer,

    Ticket_Reducer,
    ListTicket_Reducer,
    ListBanner_Reducer,
    BookingSeat_Reducer,

    User_Reducer,
    ListTypeUser_Reducer,
    UserInfo_Reducer,
    AccountInfo_Reducer,
})
export default rootReducer