import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailFilm } from '../../../redux/actions/filmInfo'
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { BsPlayCircleFill } from 'react-icons/bs'
import moment from 'moment'
import { NavLink } from 'react-router-dom'
import DetailShowtime from './DetailShowtime';
import { Modal } from 'antd';

export default function FilmDetail(props) {
    const { id } = props.match.params
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDetailFilm(id))
    }, [])
    const { filmInfo } = useSelector(state => state.DetailFilm_Reducer)
    const [visible, setVisible] = useState(false)

    return (
        <section style={{ width: '70%' }} className='film-detail xs:pl-5 mx-auto my-8'>
            <nav aria-label="breadcrumb">
                <ol style={{ background: 'none' }} className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink style={{ textDecoration: 'none' }} className='text-gray-500' to='/'>Trang Chủ</NavLink></li>
                    <li className="breadcrumb-item"><NavLink style={{ textDecoration: 'none' }} className='text-gray-500' to='#'>Đặt Vé</NavLink></li>
                    <li style={{ color: 'black' }} className="breadcrumb-item active uppercase" aria-current="page">{filmInfo?.tenPhim}</li>
                </ol>
            </nav>

            <div className='row '>
                <div className='col-12 col-sm-12 col-md-12 col-lg-4'>
                    <button className='absolute z-10 hover:text-gray-900 xs:hidden md:block
                    left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 focus:outline-none'
                        onClick={() => setVisible(true)} >
                        <BsPlayCircleFill className='text-7xl text-gray-900 border rounded-full border-white opacity-90 hover:opacity-50' /></button>

                    {/* MODAL */}
                    <Modal
                        title={<p className='text-3xl mb-1'>{filmInfo?.tenPhim}</p>}
                        centered
                        onOk={() => setVisible(false)}
                        onCancel={() => setVisible(false)}
                        footer={null}
                        visible={visible}
                        width={1000}
                    >
                        <div className='iframe-container'>
                            <iframe src={filmInfo?.trailer}
                                frameborder='0'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='video'
                            />
                        </div>
                    </Modal>
                    <img className='xs:w-10/12 sm:w-full object-cover relative' src={filmInfo?.hinhAnh} alt='tenPhim' />
                </div>

                <div className='col-12 col-sm-12 col-md-12 col-lg-8'>
                    <p className='text-3xl font-medium my-3'>{filmInfo?.tenPhim}</p>
                    <p className='xs:text-sm md:text-base'>{filmInfo?.moTa}</p>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-1'>
                            <StarIcon style={{ fontSize: '2rem' }} className='text-orange-300' />
                            <div>
                                <span className='text-bold xs:text-base md:text-2xl'>{filmInfo?.danhGia}</span>
                                <span className='text-gray-500 xs:text-base md:text-2xl'>/10</span><br />
                                <span className='text-sm text-gray-500'>599</span>
                            </div>
                        </div>
                        <button className='text-white bg-orange-500 hover:bg-orange-700 
                        py-2 px-3 xs:text-sm md:text-base focus:outline-none'>ĐÁNH GIÁ</button>
                    </div>
                    <div className='xs:flex items-center xs:gap-3 sm:gap-5 mb-4' >
                        <span className='text-white bg-orange-400'>C16</span>
                        <div className='flex items-center gap-1'>
                            <AccessTimeIcon />
                            <span className='xs:text-sm md:text-base'>94 phút</span>
                        </div>
                        <div>
                            <button className='btn btn-primary mr-3'><ThumbUpIcon style={{ fontSize: '1rem' }} /> Thích</button>
                            <button className='btn btn-primary'>Chia sẻ</button>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-gray-500'>Thể loại: </p>
                        <p>Phieu luu</p>
                    </div>
                    <div className='flex gap-2 -my-2'>
                        <p className='text-gray-500'>Đạo diễn: </p>
                        <p>Tran Huu Tan</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-gray-500'>Nhà sản xuất: </p>
                        <p>ProductionQ - Creative House</p>
                    </div>
                    <div className='flex gap-2 -my-2'>
                        <p className='text-gray-500'>Quốc gia: </p>
                        <p>Viet Nam</p>
                    </div>
                    <div className='flex gap-2 -mb-2'>
                        <p className='text-gray-500'>Diễn viên: </p>
                        <p>Huỳnh Thanh Trực, Trần Phong</p>
                    </div>
                    <div className='flex gap-2'>
                        <p className='text-gray-500'>Ngày chiếu: </p>
                        <p>{moment(filmInfo?.ngayKhoiChieu).format('DD/MM/YYYY')}</p>
                    </div>
                </div>
            </div>
            <DetailShowtime id={id} />
        </section>
    )
}
