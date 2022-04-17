import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tabs } from 'antd';
import moment from 'moment';
import { theaterGroupShowTimeInfo } from '../../../redux/actions/theaterGroupShowtime';
const { TabPane } = Tabs;


export default function ShowtimeInfo() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(theaterGroupShowTimeInfo())
    }, [])
    const { listTheaterShowtime } = useSelector(state => state.TheaterGroupShowtimeInfo_Reducer)

    const [state, setState] = useState({ tabPosition: 'left' })

    const changeTabPosition = e => {
        setState({ tabPosition: e.target.value });
    };
    const { tabPosition } = state;

    // RENDER TAB
    const renderTab = () => {
        return listTheaterShowtime?.map((theater, index) => {
            return <TabPane key={index}
                tab={<img className='w-16' src={theater.logo} alt='' />}>

                {/* LIST THEATHER GROUP */}
                {<Tabs tabPosition={tabPosition}>
                    {theater?.lstCumRap.map((item, index) => {
                        return <TabPane key={index}
                            tab={
                                <div className='flex gap-3 mb-3'>
                                    <img className='w-16' src={item.hinhAnh} alt='' />
                                    <div style={{ whiteSpace: 'initial' }} className='text-left w-72 h-16'>
                                        <p className='mb-1 text-black font-bold'>{item.tenCumRap}</p>
                                        <p className='text-gray-500 text-sm'>{item.diaChi}</p>
                                    </div>
                                </div>
                            }>

                            {/* LIST FILM */}
                            {item?.danhSachPhim.slice(0, 10).map((film, index) => {
                                return <div key={index} className='flex gap-3 mt-2 mb-3'>
                                    <img className='w-16 h-24 object-cover' src={film.hinhAnh} alt='' />
                                    <div style={{ whiteSpace: 'initial' }} className='text-left w-full'>
                                        <p className='mb-1 text-black font-bold'>{film.tenPhim}</p>
                                        {film?.lstLichChieuTheoPhim.map((showtime, index) => {
                                            return <span key={index} className='text-danger text-xl font-bold mr-3'>
                                                {moment(showtime.ngayChieuGioChieu).format('HH:mm')}
                                            </span>
                                        })}
                                    </div>
                                </div>

                            })}
                        </TabPane>
                    })}
                </Tabs>}
            </TabPane>
        })
    }

    return (
        <section style={{ width: '70%' }} className='mx-auto mb-4'>
            <p className='showtime'>LỊCH CHIẾU PHIM</p>
            <Tabs className='border' tabPosition={tabPosition}>
                {renderTab()}
            </Tabs>
        </section>
    )
}
