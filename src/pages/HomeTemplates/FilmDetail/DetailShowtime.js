import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Tabs } from 'antd';
import { showtimeInfo } from '../../../redux/actions/showtimeInfo';
import moment from 'moment';
import { NavLink } from 'react-router-dom';

const { TabPane } = Tabs;

export default function DetailShowtime(props) {
    const { id } = props
    const [state, setState] = useState({ tabPosition: 'left' })
    const changeTabPosition = e => {
        setState({ tabPosition: e.target.value });
    };
    const { tabPosition } = state;

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(showtimeInfo(id))
    }, [])
    const { showtime } = useSelector(state => state.ShowtimeInfo_Reducer)
    console.log(showtime)

    //RENDER FILM SHOWTIME
    const renderShowtime = () => {
        return showtime?.heThongRapChieu.map((theater, index) => {
            return <TabPane key={index}
                tab={
                    <div className='flex items-center gap-3'>
                        <img className='w-16' src={theater.logo} alt='' />
                        <span className='text-lg  text-black'>{theater.tenHeThongRap}</span>
                    </div>
                }>

                {<>
                    <div className='flex gap-8 text-lg font-medium py-2 mb-4 mr-3'>
                        <div className='text-center w-full'>
                            <span>Thứ 2</span><br />
                            <span>14</span>
                        </div>
                        <div className='text-center w-full'>
                            <span>Thứ 3</span><br />
                            <span>15</span>
                        </div>
                        <div className='text-center w-full'>
                            <span>Thứ 4</span><br />
                            <span>16</span>
                        </div>
                        <div className='text-center w-full'>
                            <span>Thứ 5</span><br />
                            <span>17</span>
                        </div>
                        <div className='text-center w-full'>
                            <span>Thứ 6</span><br />
                            <span>18</span>
                        </div>
                        <div className='text-center w-full'>
                            <span>Thứ 7</span><br />
                            <span>19</span>
                        </div>
                        <div className='text-center w-full text-red-500'>
                            <span>Chủ Nhật</span><br />
                            <span>20</span>
                        </div>
                    </div>
                    {theater?.cumRapChieu.map((film, index) => {
                        return <div className='flex gap-4 mb-4 cursor-pointer' key={index}>
                            <img className='w-24' src={film.hinhAnh} alt='' />
                            <div>
                                <p className='text-lg font-medium mb-0'>{film.tenCumRap}</p>
                                <p className='text-gray-500'>{film.diaChi}</p>
                                {film?.lichChieuPhim.map((item, index) => {
                                    return <NavLink to={`/ticketroom/${item.maLichChieu}`} style={{ textDecoration: 'none' }}
                                        key={index} className='text-2xl text-danger font-semibold mr-3'>
                                        {moment(item.ngayChieuGioChieu).format('HH:MM')}</NavLink>
                                })}
                            </div>
                        </div>
                    })}
                </>
                }

            </TabPane>
        })
    }

    return (
        <section className='mt-8'>
            <p className='showtime'>LỊCH CHIẾU PHIM</p>
            <Tabs className='border' tabPosition={tabPosition}>
                {renderShowtime()}
            </Tabs>
        </section>
    )
}

