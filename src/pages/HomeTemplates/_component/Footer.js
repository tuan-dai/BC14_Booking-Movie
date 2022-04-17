import React from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IoLogoApple, IoLogoGooglePlaystore } from 'react-icons/io5'
import { ReactComponent as Logo } from '../../../assets/image/logo-cybersoft-gradient.svg'
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer style={{ background: '#1a1a1a' }} >
            <div style={{ width: '70%' }} className='footer-content row mx-auto pt-4'>
                <div className='col-6 col-sm-6 col-md-6 col-lg-3 text-gray-400'>
                    <h6 className='text-gray-400 my-4 footer-title'>GIỚI THIỆU</h6>
                    <ul className='text-sm'>
                        <li className='flex items-center gap-1'>
                            <DoubleArrowIcon style={{ fontSize: '0.8rem' }} />
                            <NavLink to='' className='footer-link'>VỀ CHÚNG TÔI</NavLink>
                        </li>
                        <li className='my-3 flex items-center gap-1'>
                            <DoubleArrowIcon style={{ fontSize: '0.8rem' }} />
                            <NavLink to='' className='footer-link'>THOẢ THUẬN SỬ DỤNG</NavLink>
                        </li>
                        <li className='flex items-center gap-1'>
                            <DoubleArrowIcon style={{ fontSize: '0.8rem' }} />
                            <NavLink to='' className='footer-link'>QUY CHẾ HOẠT ĐỘNG</NavLink>
                        </li>
                        <li className='mt-3 mb-8 flex items-center gap-1'>
                            <DoubleArrowIcon style={{ fontSize: '0.8rem' }} />
                            <NavLink to='' className='footer-link'>CHÍNH SÁCH BẢO MẬT</NavLink>
                        </li>
                    </ul>
                </div>

                <div className='col-6 col-sm-6 col-md-6 col-lg-3 text-gray-400'>
                    <h6 className='text-gray-400 my-4 footer-title'>GÓC ĐIỆN ẢNH</h6>
                    <ul className='text-sm'>
                        <li className='flex items-center gap-1'>
                            <DoubleArrowIcon style={{ fontSize: '0.8rem' }} />
                            <NavLink to='' className='footer-link'>THỂ LOẠI PHIM</NavLink>
                        </li>
                        <li className='my-3 flex items-center gap-1'>
                            <DoubleArrowIcon style={{ fontSize: '0.8rem' }} />
                            <NavLink to='' className='footer-link'>BÌNH LUẬN PHIM</NavLink>
                        </li>
                        <li className='flex items-center gap-1'>
                            <DoubleArrowIcon style={{ fontSize: '0.8rem' }} />
                            <NavLink to='' className='footer-link'>BLOG ĐIỆN ẢNH</NavLink>
                        </li>
                        <li className='mt-3 mb-8 flex items-center gap-1'>
                            <DoubleArrowIcon style={{ fontSize: '0.8rem' }} />
                            <NavLink to='' className='footer-link'>PHIM HAY THÁNG</NavLink>
                        </li>
                    </ul>
                </div>

                <div className='col-6 col-sm-6 col-md-6 col-lg-3 text-gray-400'>
                    <h6 className='text-gray-400 my-4 footer-title'>HỖ TRỢ</h6>
                    <ul className='text-sm'>
                        <li className='flex items-center gap-1'>
                            <DoubleArrowIcon style={{ fontSize: '0.8rem' }} />
                            <NavLink to='' className='footer-link'>GÓP Ý</NavLink>
                        </li>
                        <li className='my-3 flex items-center gap-1'>
                            <DoubleArrowIcon style={{ fontSize: '0.8rem' }} />
                            <NavLink to='' className='footer-link'>SALE & SERVICES</NavLink>
                        </li>
                        <li className='flex items-center gap-1'>
                            <DoubleArrowIcon style={{ fontSize: '0.8rem' }} />
                            <NavLink to='' className='footer-link'>RẠP / GIÁ VÉ</NavLink>
                        </li>
                        <li className='mt-3 mb-8 flex items-center gap-1'>
                            <DoubleArrowIcon style={{ fontSize: '0.8rem' }} />
                            <NavLink to='' className='footer-link'>TUYỂN DỤNG</NavLink>
                        </li>
                    </ul>
                </div>

                <div className='col-6 col-sm-6 col-md-6 col-lg-3 text-gray-400'>
                    <h6 className='text-gray-400 my-4 footer-title'>KẾT NỐI CYBERSOFT CINEMA</h6>
                    <div className='flex items-center gap-3'>
                        <FacebookIcon style={{ fontSize: '2rem' }} />
                        <YouTubeIcon style={{ fontSize: '2rem' }} />
                        <InstagramIcon style={{ fontSize: '2rem' }} />
                    </div>
                    <h6 className='text-gray-400 my-4 footer-title'>DOWNLOAD APP</h6>
                    <div className='flex items-center gap-3'>
                        <IoLogoApple style={{ fontSize: '2rem' }} />
                        <IoLogoGooglePlaystore style={{ fontSize: '2rem' }} />
                    </div>
                </div>
            </div>

            <div style={{ borderTop: '1px solid gray' }} className='py-3 mt-16'>
                <div style={{ width: '70%' }}
                    className='footer-contact xs:flex xs:flex-col xs:items-center xs:justify-center lg:flex lg:flex-row lg:items-center gap-4 mx-auto pl-3'>
                    <Logo className='w-32 h-full' />
                    <span className='xs:text-center lg:text-left italic text-gray-400 text-sm'>Công Ty Cổ Phần Phim Thiên Ngân, Tầng 5, Toà Nhà Mặt Trời Sông Hồng, 23 Phan Chu Trinh, Phường Phan Chu Trinh, Quận Hoàn Kiếm, Hà Nội</span>
                </div>
            </div>
        </footer>
    )
}
