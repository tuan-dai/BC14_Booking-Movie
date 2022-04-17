import React from 'react'
import { useDispatch } from 'react-redux';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LockIcon from '@mui/icons-material/Lock';

import { useFormik } from 'formik';
import *as Yup from 'yup'
import { updateProfile } from '../../../../redux/actions/userInfo';

export default function UserInfo(props) {
    const { userInfo } = props
    const dispatch = useDispatch()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            hoTen: userInfo?.hoTen,
            email: userInfo?.email,
            soDt: userInfo?.soDT,
            taiKhoan: userInfo?.taiKhoan,
            matKhau: userInfo?.matKhau,
            maNhom: userInfo?.maNhom,
            maLoaiNguoiDung: userInfo?.maLoaiNguoiDung,
        },
        onSubmit: values => dispatch(updateProfile(values, props.history)),
        validationSchema: Yup.object({
            hoTen: Yup.string().required('Họ tên không để trống'),
            email: Yup.string().required('Email không để trống').email('Email is valid'),
            soDt: Yup.string().required('Số điện thoại không để trống'),
            taiKhoan: Yup.string().required('Tài khoản không để trống'),
            matKhau: Yup.string().required('Mật khẩu không để trống').min(5, 'Too short')
        })
    })
    const { handleChange, handleSubmit, errors, touched, values } = formik

    return (
        <form onSubmitCapture={handleSubmit}>
            <div className='row mt-4'>
                <div className='col-md-4 mr-4'>
                    <div className='flex items-center'>
                        <span className='bg-blue-600 py-1.5 px-2 rounded-l-md text-white'><PersonIcon /></span>
                        <input className='form-control shadow-md' placeholder='Họ tên' type='text'
                            name='hoTen' value={values.hoTen} onChange={handleChange} />
                    </div>
                    {errors.hoTen && touched.hoTen && <span className='text-danger ml-10'>{errors.hoTen}</span>}

                    <div className='flex items-center mt-10'>
                        <span className='bg-blue-600 py-1.5 px-2 rounded-l-md text-white'><EmailIcon /></span>
                        <input className='form-control shadow-md' placeholder='Email' type='email'
                            name='email' value={values.email} onChange={handleChange} />
                    </div>
                    {errors.email && touched.email && <span className='text-danger ml-10'>{errors.email}</span>}

                    <div className='flex items-center mt-10'>
                        <span className='bg-blue-600 py-1.5 px-2 rounded-l-md text-white'><PhoneIphoneIcon /></span>
                        <input className='form-control shadow-md' placeholder='Số điện thoại' type='number'
                            name='soDt' value={values.soDt} onChange={handleChange} />
                    </div>
                    {errors.soDt && touched.soDt && <span className='text-danger ml-10'>{errors.soDt}</span>}
                </div>

                <div className='col-md-4'>
                    <div className='flex items-center'>
                        <span className='bg-blue-600 py-1.5 px-2 rounded-l-md text-white'><PersonIcon /></span>
                        <input className='form-control shadow-md' placeholder='Tài khoản' type='text'
                            name='taiKhoan' value={values.taiKhoan} onChange={handleChange} />
                    </div>
                    {errors.taiKhoan && touched.taiKhoan && <span className='text-danger ml-10'>{errors.taiKhoan}</span>}

                    <div className='flex items-center mt-10' >
                        <span className='bg-blue-600 py-1.5 px-2 rounded-l-md text-white'><LockIcon /></span>
                        <input className='form-control shadow-md' placeholder='Mật khẩu' type='password'
                            name='matKhau' value={values.matKhau} onChange={handleChange} />
                    </div>
                    {errors.matKhau && touched.matKhau && <span className='text-danger ml-10'>{errors.matKhau}</span>}
                    <button className='btn btn-primary float-right mt-10' type='submit'>Cập nhật</button>
                </div>
            </div>
        </form>
    )
}
