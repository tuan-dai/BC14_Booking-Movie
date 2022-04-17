import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'antd';
import { getListBanner } from '../../../redux/actions/listBanner';

export default function Slider() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListBanner())
    }, [])
    const { listBanner } = useSelector(state => state.ListBanner_Reducer)

    const renderImage = () => {
        return listBanner?.map(banner => {
            return <div key={banner.maPhim}>
                <h3 style={contentStyle} className='sm:h-full'>
                    <img className='w-full h-full  object-cover' src={banner.hinhAnh} alt='' />
                </h3>
            </div>
        })
    }

    const contentStyle = {
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',

    };

    return (
        <Carousel autoplay>
            {renderImage()}
        </Carousel>
    )
}
