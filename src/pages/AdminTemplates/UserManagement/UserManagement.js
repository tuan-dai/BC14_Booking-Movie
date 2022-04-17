import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { deleteUser, getListUser, searchUser } from '../../../redux/actions/user';
import { DeleteFilled, EditFilled } from '@ant-design/icons/lib/icons';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Input, Table } from 'antd';

export default function UserManagement() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListUser())
    }, [])

    const { listUser } = useSelector(state => state.User_Reducer)
    const data = listUser
    const columns = [
        {
            title: 'Tai khoan',
            dataIndex: 'taiKhoan',
            sorter: { compare: (a, b) => a.taiKhoan.localeCompare(b.taiKhoan) },
            render: (text, record) => (<span>{record?.taiKhoan}</span>)
        },
        {
            title: 'Ho ten',
            dataIndex: 'hoTen',
            sorter: { compare: (a, b) => a.hoTen.localeCompare(b.hoTen) },
            render: (text, record) => (<span>{record?.hoTen}</span>)
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: { compare: (a, b) => a.email.localeCompare(b.email) },
            render: (text, record) => (<span>{record?.email}</span>)
        },
        {
            title: 'So dien thoai',
            dataIndex: 'soDt',
            sorter: { compare: (a, b) => a.soDt - b.soDt },
            render: (text, record) => (<span>{record?.soDt}</span>)
        },
        {
            title: 'Ma loai nguoi dung',
            dataIndex: 'maLoaiNguoiDung',
            sorter: { compare: (a, b) => a.email.localeCompare(b.email) },
            render: (text, record) => (<span>{record?.maLoaiNguoiDung}</span>)
        },
        {
            title: 'Tac vu',
            key: 'action',
            render: (text, record) => (
                <div className='flex items-center gap-5'>
                    <NavLink to={`/admin/user-management/edit-user/${record.taiKhoan}`}><EditFilled className='text-primary text-2xl' /></NavLink>
                    <DeleteFilled className='text-danger text-2xl cursor-pointer'
                        onClick={() => dispatch(deleteUser(record?.taiKhoan))} />
                </div>
            )
        }
    ];

    const { Search } = Input;

    return (
        <div>
            <div className='flex items-center gap-3'>
                <AccountBoxIcon className='text-blue-900' />
                <span className='text-4xl text-blue-900 font-semibold'>Quan ly nguoi dung</span>
            </div>
            <div className='flex justify-between my-4 mb-5'>
                <NavLink to='/admin/user-management/add-user' className='btn btn-success'><AddCircleOutlineIcon />  Them nguoi dung</NavLink>
                <Search
                    style={{ width: '25rem' }}
                    placeholder="Nhap ho ten"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={value => dispatch(searchUser(value))}
                />
            </div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
