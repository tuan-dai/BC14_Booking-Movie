import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { NavLink } from 'react-router-dom';

import { useFormik } from 'formik';
import *as Yup from 'yup'
import { addUser } from '../../../redux/actions/user';
import { getTypeUser } from '../../../redux/actions/typeUser';

export default function AddUser(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTypeUser())
    }, [])

    const { listTypeUser } = useSelector(state => state.ListTypeUser_Reducer)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: 'GP01',
            maLoaiNguoiDung: listTypeUser?.[0].maLoaiNguoiDung,
            hoTen: ''
        },
        onSubmit: values => dispatch(addUser(values, props.history)),
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required('*Tai khoan khong de trong'),
            matKhau: Yup.string().required('*Mat khau khong de trong').min(5, 'Too short'),
            email: Yup.string().required('*Email khong de trong').email('*Email khong dung dinh dang'),
            soDt: Yup.string().required('*So dien thoai khong de trong'),
            maLoaiNguoiDung: Yup.string().required('*Chua chon loai nguoi dung'),
            hoTen: Yup.string().required('*Ho ten khong de trong')
        })
    })
    const { handleChange, handleSubmit, errors, touched } = formik

    return (
        <div>
            <div className='flex items-center gap-3 mb-8'>
                <AccountBoxIcon className='text-blue-900' />
                <span className='text-4xl text-blue-900 font-semibold'>Them nguoi dung</span>
            </div>

            <form onSubmitCapture={handleSubmit}>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='form-group'>
                            <label className='font-semibold'>Tai khoan</label>
                            <input className='form-control' type='text'
                                name='taiKhoan' onChange={handleChange} />
                            {errors.taiKhoan && touched.taiKhoan && <p className='text-danger'>{errors.taiKhoan}</p>}
                        </div>

                        <div className='form-group mt-8'>
                            <label className='font-semibold'>Ho ten</label>
                            <input className='form-control' type='text'
                                name='hoTen' onChange={handleChange} />
                            {errors.hoTen && touched.hoTen && <p className='text-danger'>{errors.hoTen}</p>}
                        </div>

                        <div className='form-group mt-8'>
                            <label className='font-semibold'>Email</label>
                            <input className='form-control' type='email'
                                name='email' onChange={handleChange} />
                            {errors.email && touched.email && <p className='text-danger'>{errors.email}</p>}
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='form-group'>
                            <label className='font-semibold'>Mat khau</label>
                            <input className='form-control' type='password'
                                name='matKhau' onChange={handleChange} />
                            {errors.matKhau && touched.matKhau && <p className='text-danger'>{errors.matKhau}</p>}
                        </div>

                        <div className='form-group mt-8'>
                            <label className='font-semibold'>So dien thoai</label>
                            <input className='form-control' type='number'
                                name='soDt' onChange={handleChange} />
                            {errors.soDt && touched.soDt && <p className='text-danger'>{errors.soDt}</p>}
                        </div>

                        <div className='form-group mt-8'>
                            <label className='font-semibold'>Ma nhom</label>
                            <input className='form-control' type='text'
                                value='GP01' disabled={true} />
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-8'>
                        <div className='form-group my-8'>
                            <label className='font-semibold'>Loai nguoi dung</label>
                            <select className='form-control'
                                name='maLoaiNguoiDung' onChange={handleChange} >
                                {listTypeUser?.map((item, index) => {
                                    return <option key={index} value={item.maLoaiNguoiDung}>{item.tenLoai}</option>
                                })}
                            </select>
                            {errors.maLoaiNguoiDung && touched.maLoaiNguoiDung && <p className='text-danger'>{errors.maLoaiNguoiDung}</p>}
                        </div>

                    </div>
                </div>

                <div className='row mt-4'>
                    <div className='col-md-8'>
                        <div className='flex justify-between items-center'>
                            <NavLink to='/admin/user-management' style={{ textDecoration: 'none' }} className='flex items-center'>
                                <KeyboardDoubleArrowLeftIcon />
                                <span className='text-lg'>Tro lai</span>
                            </NavLink>
                            <button className='bg-blue-500 py-2 px-4 rounded-sm hover:bg-blue-600 focus:outline-none text-white mt-6'
                                type='submit' >Them nguoi dung</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
