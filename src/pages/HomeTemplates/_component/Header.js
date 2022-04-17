import React from 'react'
import { IoPersonSharp, IoPersonOutline, IoSearchOutline } from 'react-icons/io5';
import { AiOutlineLogout } from 'react-icons/ai'
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, Dropdown, Button } from 'antd';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const menu = (
        <Menu style={{ borderRadius: '0.5rem', width: '10rem' }} className='top-4'>
            <Menu.Item key='1' icon={<IoPersonOutline style={{ fontSize: '0.9rem' }} />} >
                <NavLink to='/profile' style={{ color: 'black', textDecoration: 'none' }}>Profile</NavLink>
            </Menu.Item>

            <Menu.Item key='2' className='border-t'
                icon={<AiOutlineLogout style={{ fontSize: '1rem' }} />}>
                <button className='focus:outline-none' onClick={() => {
                    localStorage.removeItem('USER_LOGIN')
                    window.location.reload()
                }} > Logout</button>
            </Menu.Item>
        </Menu >
    );

    return (
        <header>
            {/* TOP */}
            <div style={{ width: '70%' }} className='header-content xs:px-3 mx-auto py-2 flex justify-between items-center'>
                <NavLink to='/'><img className='xs:w-40 lg:w-72' src='./img/logo-cybersoft.png' alt='logo' /></NavLink>

                <div className='xs:hidden lg:inline-flex flex items-center relative'>
                    <input className='w-72 border focus:outline-slate-300 py-1 px-2' type='text' placeholder='Tìm tên phim, diễn viên...' />
                    <IoSearchOutline className='absolute right-2 text-gray-400' />
                </div>

                {localStorage.getItem('USER_LOGIN')
                    ? <div className='flex xs:absolute xs:right-14 md:relative md:right-0 items-center gap-2 text-gray-500 text-sm 
                        rounded-full border py-1.5 px-3 cursor-pointer'>
                        <img className='rounded-full w-8 h-8 -ml-1' src='https://picsum.photos/200' alt='' />
                        <Dropdown
                            overlay={menu}
                            placement="bottomCenter"
                            trigger={['click']} >
                            <span>Đăng xuất</span>
                        </Dropdown>
                    </div>
                    : <NavLink to='/signin' style={{ textDecoration: 'none' }}
                        className='flex xs:absolute xs:right-14 md:relative md:right-0 items-center gap-2 text-gray-500 hover:text-gray-500 
                        text-sm rounded-full border py-1.5 px-3'>
                        <IoPersonSharp />
                        <span >Đăng nhập</span>
                    </NavLink>
                }
                <button className="navbar-toggler xs:block md:hidden focus:outline-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <MenuIcon className="navbar-toggler-icon" />
                </button>
            </div>

            {/* LIST TAB */}
            <nav className="navbar navbar-expand-lg text-white bg-black">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active xs:text-center">
                            <NavLink className="nav-link" to="#">MUA VÉ <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item xs:text-center">
                            <NavLink className="nav-link" to="#">PHIM</NavLink>
                        </li>
                        <li className="nav-item xs:text-center">
                            <NavLink className="nav-link" to="#">GÓC ĐIỆN ẢNH</NavLink>
                        </li>
                        <li className="nav-item xs:text-center">
                            <NavLink className="nav-link" to="#">SỰ KIỆN</NavLink>
                        </li>
                        <li className="nav-item xs:text-center">
                            <NavLink className="nav-link" to="#">RẠP/GIÁ VÉ</NavLink>
                        </li>
                        <li className="nav-item xs:text-center">
                            <NavLink className="nav-link" to="#">HỖ TRỢ</NavLink>
                        </li>
                        <li className="nav-item xs:text-center">
                            <NavLink className="nav-link" to="#">THÀNH VIÊN</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}
