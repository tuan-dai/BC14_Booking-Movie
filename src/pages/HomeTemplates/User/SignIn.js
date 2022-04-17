import React from 'react'
import { useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom'
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

import { useFormik } from 'formik'
import *as Yup from 'yup'
import { signIn } from '../../../redux/actions/user';

export default function SignIn(props) {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        onSubmit: values => dispatch(signIn(values, props.history)),
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required('Tai khoan khong de trong'),
            matKhau: Yup.string().required('Mat khau khong de trong')
        })
    })
    const { handleChange, handleSubmit, errors, touched, dirty } = formik

    return (
        <div className='bg-gray-200 min-w-screen min-h-screen relative'>
            <div className='absolute xs:w-11/12 xs:h-11/12 lg:w-1/2 lg:h-10/12
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto bg-white rounded-3xl shadow-md'>
                <div className='xs:flex xs:flex-col-reverse xl:flex xl:flex-row w-full h-full'>
                    {/* LEFT */}
                    <div className='xs:w-full flex justify-center items-stretch xs:pt-4 xs:pb-16 xl:py-24'>
                        <div className='flex flex-col justify-between items-center'>
                            <img className='xs:hidden xl:block' src='./img/signin-image.jpg' alt='' />
                            <NavLink to='/signup' className='text-gray-800 text-lg underline'>Đăng ký tài khoản</NavLink>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className='xs:w-full xs:translate-y-6 xl:translate-y-0 xs:py-6 xl:py-24
                    flex justify-center items-center'>
                        <form onSubmitCapture={handleSubmit} className='w-9/12'>
                            <p className='text-5xl font-bold mb-5'>Đăng nhập</p>
                            <div style={{ borderBottom: '1px solid gray' }} className='flex items-center gap-4 py-1' >
                                <PersonIcon />
                                <input className='focus: outline-none' type='text' placeholder='Họ tên' name='taiKhoan' onChange={handleChange} />
                            </div>
                            {errors.taiKhoan && touched.taiKhoan && <p className='text-danger'>{errors.taiKhoan}</p>}

                            <div style={{ borderBottom: '1px solid gray' }} className='flex items-center gap-4 py-1 mt-5'>
                                <LockIcon />
                                <input className='focus: outline-none' type='password' placeholder='Mật khẩu' name='matKhau' onChange={handleChange} />
                            </div>
                            {errors.matKhau && touched.matKhau && <p className='text-danger'>{errors.matKhau}</p>}

                            <div className='flex items-center gap-5 ml-1 mb-5 pt-2 mt-4'>
                                <input type='checkbox' />
                                <span>Ghi nhớ</span>
                            </div>
                            <button type='submit' className='rounded-md bg-blue-400 hover:bg-blue-600 transition-transform 
                            text-white text-xl py-2.5 px-4 mt-1 focus:outline-none'
                                disabled={!dirty && errors}
                            >Log in</button>

                            <div className='flex items-center gap-6 xs:mt-16 md:mt-28'>
                                <span>hoặc đăng nhập với</span>
                                <div className='flex items-center gap-4'>
                                    <span className='py-2 px-2 text-white bg-blue-500 rounded-md transition-all duration-500 hover:scale-125'><TwitterIcon /></span>
                                    <span className='py-2 px-2 text-white bg-red-500 rounded-md transition-all duration-500 hover:scale-125'><GoogleIcon /></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
