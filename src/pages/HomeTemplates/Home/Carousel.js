import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { GoChevronRight, GoChevronLeft } from 'react-icons/go'
import { getListBanner } from '../../../redux/actions/listBanner';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className='arrow-btn next' onClick={onClick}><GoChevronRight /></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className='arrow-btn prev' onClick={onClick}><GoChevronLeft /></div>
    );
}

export default function Carousel() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListBanner())
    }, [])
    const { listBanner } = useSelector(state => state.ListBanner_Reducer)

    const renderImage = () => {
        return listBanner?.map(item => {
            return <img className='image-carousel' src={item.hinhAnh} alt={item.maPhim} />
        })
    }

    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="slick-dots--custom"></div>
        )
    };

    return (
        <section className='relative'>
            <Slider {...settings}>
                {renderImage()}
            </Slider>
        </section>
    )
}
