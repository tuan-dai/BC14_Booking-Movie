import React, { useState } from 'react'
import { Pagination } from 'antd';
import moment from 'moment'

const pageSize = 10

export default function BookingHistory(props) {
    const { userInfo } = props
    const [state, setState] = useState({
        minIndex: 0,
        maxIndex: 1
    })

    const handleChange = (page) => {
        setState({
            minIndex: (page - 1) * pageSize,
            maxIndex: page * pageSize
        })
    }


    //RENDER BOOKING HISTORY
    const renderBookingHistory = () => {
        return userInfo?.thongTinDatVe?.slice(state.minIndex, state.maxIndex).map((item, index) => {
            return <div className='col-md-6'>
                <div key={index} className='flex gap-4 mb-4'>
                    <img className='w-32 h-44 object-cover' src={item.hinhAnh} alt='' />
                    <div>
                        <p className='font-semibold text-xl mb-1'>{item.tenPhim}</p>
                        <p className='text-gray-400 mb-1'>Thời lượng: {item.thoiLuongPhim} phút</p>
                        <span className='font-semibold'>Ngày đặt:</span>
                        <span className='text-danger font-semibold'> {moment(item.ngayDat).format('DD-MM-YYYY HH:MM:ss')}</span>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className='row mt-4'>
            {renderBookingHistory()}
            <Pagination
                style={{ margin: '1rem auto' }}
                current={1}
                pageSize={pageSize}
                total={userInfo?.thongTinDatVe.length}
                onChange={handleChange}
            />
        </div>
    )
}
