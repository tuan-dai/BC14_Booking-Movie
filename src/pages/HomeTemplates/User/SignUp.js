import React from 'react'
import { useDispatch } from 'react-redux';

import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

import { useFormik } from 'formik'
import *as Yup from 'yup'
import { NavLink } from 'react-router-dom';
import { signUp } from '../../../redux/actions/user';

export default function SignUp(props) {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: 'GP01',
            hoTen: '',
        },
        onSubmit: values => dispatch(signUp(values, props.history)),
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required('Tai khoan khong de trong'),
            matKhau: Yup.string().required('Mat khau khong de trong').min(5, 'Too short'),
            email: Yup.string().required('Email khong de trong').email('Email is valid'),
            soDt: Yup.string().required('So dien thoai khong de trong'),
            hoTen: Yup.string().required('Ho ten khong de trong')
        })
    })
    const { handleSubmit, handleChange, errors, touched, dirty } = formik

    return (
        <section className='bg-gray-200 min-w-screen min-h-screen relative'>
            <div className='absolute xs:w-11/12 xs:h-11/12 lg:w-1/2 lg:h-10/12
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto bg-white rounded-3xl shadow-md'>
                <div className='xs:flex xs:flex-col xl:flex xl:flex-row w-full h-full'>
                    {/* LEFT */}
                    <div className='w-full xs:translate-y-6 xl:translate-y-0 xs:py-6 xl:py-24
                    flex justify-center items-center'>
                        <form onSubmitCapture={handleSubmit} className='w-full xs:px-12 xl:px-16'>
                            <p className='text-5xl font-bold mb-5'>Đăng ký</p>
                            <div style={{ borderBottom: '1px solid #aaaaaa' }} className='flex items-center gap-4 pb-1' >
                                <PersonIcon />
                                <input className='focus: outline-none' type='text' placeholder='Họ tên' name='hoTen' onChange={handleChange} />
                            </div>
                            {errors.hoTen && touched.hoTen && <p className='text-danger'>{errors.hoTen}</p>}

                            <div style={{ borderBottom: '1px solid #aaaaaa', marginTop: '2rem' }} className='flex items-center gap-4 pb-1' >
                                <PersonOutlinedIcon />
                                <input className='focus: outline-none' type='text' placeholder='Tài khoản' name='taiKhoan' onChange={handleChange} />
                            </div>
                            {errors.taiKhoan && touched.taiKhoan && <p className='text-danger'>{errors.taiKhoan}</p>}

                            <div style={{ borderBottom: '1px solid #aaaaaa', marginTop: '2rem' }} className='flex items-center gap-4 pb-1' >
                                <MailIcon />
                                <input className='focus: outline-none' type='email' placeholder='Email' name='email' onChange={handleChange} />
                            </div>
                            {errors.email && touched.email && <p className='text-danger'>{errors.email}</p>}

                            <div style={{ borderBottom: '1px solid #aaaaaa', marginTop: '2rem' }} className='flex items-center gap-4 pb-1'>
                                <LockIcon />
                                <input className='focus: outline-none' type='password' placeholder='Mật khẩu' name='matKhau' onChange={handleChange} />
                            </div>
                            {errors.matKhau && touched.matKhau && <p className='text-danger'>{errors.matKhau}</p>}

                            <div style={{ borderBottom: '1px solid #aaaaaa', marginTop: '2rem' }} className='flex items-center gap-4 pb-1' >
                                <PhoneIphoneIcon />
                                <input className='focus: outline-none' type='text' placeholder='Số điện thoại' name='soDt' onChange={handleChange} />
                            </div>
                            {errors.soDt && touched.soDt && <p className='text-danger'>{errors.soDt}</p>}

                            <div className='flex items-center gap-5 ml-1 mb-5 mt-4'>
                                <input type='checkbox' />
                                <span>Tôi đồng ý với tất cả điều khoản</span>
                            </div>

                            <button type='submit' className='rounded-md bg-blue-400 hover:bg-blue-600 transition-transform 
                            text-white text-xl py-2.5 px-5 mt-1 focus: outline-none'
                                disabled={!dirty && errors}
                            >Đăng ký</button>
                        </form>
                    </div>

                    {/* RIGHT */}
                    <div className='xs:w-full flex justify-center items-stretch xs:pt-4 xs:pb-16 xl:py-24'>
                        <div className='flex flex-col justify-between items-center'>
                            <img className='xs:hidden xl:block' src='./img/signup-image.jpg' alt='' />
                            <NavLink to='/signin' className='text-gray-800 text-lg underline'>Tôi đã là thành viên</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
