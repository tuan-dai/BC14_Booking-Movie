import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';

import { Input, Table } from 'antd';
import { getListFilm, deleteFilm, searchFilm } from '../../../redux/actions/film';
import { DeleteFilled, EditFilled } from '@ant-design/icons/lib/icons';
import { NavLink } from 'react-router-dom';


export default function FilmManagement() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListFilm())
    }, [])

    const { listFilm } = useSelector(state => state.Film_Reducer)
    console.log(listFilm)
    const data = listFilm
    const columns = [
        {
            title: 'Ma phim',
            dataIndex: 'maPhim',
            sorter: { compare: (a, b) => a.maPhim - b.maPhim },
            render: (text, record) => (<span>{record?.maPhim}</span>)
        },
        {
            title: 'Hinh anh',
            dataIndex: 'hinhAnh',
            render: (text, record) => (<img className='w-16 h-24 object-cover' src={record?.hinhAnh} alt=''
                onError={e => {
                    e.target.onError = null
                    e.target.src = 'https://picsum.photos/300/200'
                }} />)
        },
        {
            title: 'Ten phim',
            dataIndex: 'tenPhim',
            sorter: { compare: (a, b) => a.tenPhim.localeCompare(b.tenPhim) },
            render: (text, record) => (<span>{record?.tenPhim}</span>)
        },
        {
            title: 'Mo ta',
            dataIndex: 'moTa',
            render: (text, record) => (
                <span>
                    {record?.moTa.length > 50 ? record?.moTa.substr(0, 50) + '...' : record?.moTa}
                </span>
            )
        },
        {
            title: 'Tac vu',
            key: 'action',
            render: (text, record) => (
                <div className='flex items-center gap-5'>
                    <NavLink to={`/admin/edit-film/${record?.maPhim}`}><EditFilled className='text-primary text-2xl' /></NavLink>
                    <DeleteFilled className='text-danger text-2xl cursor-pointer'
                        onClick={() => dispatch(deleteFilm(record?.maPhim))} />
                    <NavLink className='text-info' to={`/admin/films/showtime/${record?.maPhim}`}>
                        <EventNoteIcon />
                    </NavLink>
                </div>
            )
        }
    ];

    const { Search } = Input;
    return (
        <div>
            <div className='flex items-center gap-3'>
                <MovieCreationIcon className='text-blue-900' />
                <span className='text-4xl text-blue-900 font-semibold'>Quan ly phim</span>
            </div>
            <div className='flex justify-between my-4 mb-5'>
                <NavLink to='/admin/add-film' className='btn btn-success'> <AddCircleOutlineIcon /> Them phim</NavLink>
                <Search
                    style={{ width: '25rem' }}
                    placeholder="Nhap ten phim"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={value => dispatch(searchFilm(value))}
                />
            </div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
