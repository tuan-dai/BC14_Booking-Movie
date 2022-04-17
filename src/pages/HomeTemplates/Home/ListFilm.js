import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListFilm } from '../../../redux/actions/film'
import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom';


export default function ListFilm() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListFilm())
    }, [])
    const { listFilm } = useSelector(state => state.Film_Reducer)

    const { TabPane } = Tabs;

    // RENDER PHIM DANG CHIEU
    const renderFilmNowShowing = () => {
        return listFilm?.filter(film => {
            if (film.dangChieu) {
                return true
            } return false
        }).map(film => {
            return <div key={film.maPhim} className='col-sm-6 col-md-6 col-lg-3 mb-5 relative'>
                <NavLink style={{ textDecoration: 'none' }} to={`/detail/${film.maPhim}`} className='now-showing flex justify-center items-center'>
                    <button className='border border-gray-400 text-white py-2 px-4 hover:border-none
                     hover:bg-green-500 focus:outline-none'>MUA VÉ</button>
                </NavLink>
                <div>
                    <img style={{ width: '15rem', height: '22rem' }} className='object-cover' src={film.hinhAnh} alt='film.tenPhim' />
                    <p style={{ width: '15rem' }} className='mt-2 text-sm font-medium uppercase'>{film.tenPhim}</p>
                </div>
            </div>
        })
    }

    // RENDER PHIM SAP CHIEU
    const renderFilmOnRelease = () => {
        return listFilm?.filter(film => {
            if (film.sapChieu) {
                return true
            } return false
        }).map(film => {
            return <div key={film.maPhim} className='col-sm-6 col-md-6 col-lg-3 mb-5 relative'>
                <NavLink style={{ textDecoration: 'none' }} to={`/detail/${film.maPhim}`} className='now-showing flex justify-center items-center'>
                    <button className='border text-white py-2 px-4 hover:border-green-500
                     hover:bg-green-500 focus:outline-none'>MUA VÉ</button>
                </NavLink>
                <div>
                    <img style={{ width: '15rem', height: '22rem' }} className='object-cover' src={film.hinhAnh} alt='film.tenPhim' />
                    <p className='mt-2 text-sm font-medium uppercase'>{film.tenPhim}</p>
                </div>
            </div>
        })
    }

    return (
        <section style={{ width: '70%' }} className='mx-auto mt-4'>
            <Tabs size='large' defaultActiveKey="1">
                <TabPane tab="PHIM ĐANG CHIẾU" key="1">
                    <div className='row'>
                        {renderFilmNowShowing()}
                    </div>
                </TabPane>
                <TabPane tab="PHIM SẮP CHIẾU" key="2">
                    <div className='row'>
                        {renderFilmOnRelease()}
                    </div>
                </TabPane>
            </Tabs>
        </section>
    )
}
