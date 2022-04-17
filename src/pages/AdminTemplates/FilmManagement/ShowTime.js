import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import moment from 'moment';
import *as Yup from 'yup'

import {
    Form,
    Button,
    Select,
    DatePicker,
    InputNumber,
} from 'antd';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { getDetailFilm } from '../../../redux/actions/filmInfo'
import { theaterInfo } from '../../../redux/actions/theaterInfo'
import { theaterGroupInfo } from '../../../redux/actions/theaterGroupInfo';
import { createShowtime } from '../../../redux/actions/ticket';

export default function ShowTime(props) {
    const { id } = props.match.params
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDetailFilm(id))
        dispatch(theaterInfo())
    }, [])

    const { filmInfo } = useSelector(state => state.DetailFilm_Reducer)
    const { theater } = useSelector(state => state.TheaterInfo_Reducer)
    const { theaterGroup } = useSelector(state => state.TheaterGroupInfo_Reducer)

    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    //render theater
    const renderTheater = () => {
        return theater?.map((item, index) => {
            return <Select.Option key={index} value={item.maHeThongRap} >{item.tenHeThongRap}</Select.Option>
        })
    }

    //render theater group
    const renderTheaterGroup = () => {
        return theaterGroup?.map((item, index) => {
            return <Select.Option key={index} value={item.maCumRap}>{item.tenCumRap}</Select.Option>
        })
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: filmInfo?.maPhim,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: '',
        },
        onSubmit: values => dispatch(createShowtime(values, props.history)),
        validationSchema: Yup.object({
            ngayChieuGioChieu: Yup.string().required('Chua chon ngay khoi chieu'),
            giaVe: Yup.string().required('Chua chon gia ve')
        })
    })
    const { handleChange, handleSubmit, setFieldValue, errors, touched } = formik




    return (
        <div>
            <div className='flex items-center gap-3 mb-16'>
                <EventNoteIcon className='text-blue-900' />
                <span className='text-4xl text-blue-900 font-semibold'>Lich chieu - {filmInfo?.tenPhim}</span>
            </div>

            <div className='row'>
                <div className='col-md-3'>
                    <img className='w-72 h-full' src={filmInfo?.hinhAnh} alt='' />
                </div>

                <div className='col-md-6 mt-4 -ml-16'>
                    <Form
                        onSubmitCapture={handleSubmit}
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 14,
                        }}
                        layout="horizontal"
                        initialValues={{
                            size: componentSize,
                        }}
                        onValuesChange={onFormLayoutChange}
                        size={componentSize}
                    >
                        <Form.Item label={<span className='font-semibold'>He thong rap</span>}>
                            <Select placeholder='Chon he thong rap' onChange={event => dispatch(theaterGroupInfo(event))} >
                                {renderTheater()}
                            </Select>
                        </Form.Item>

                        <Form.Item label={<span className='font-semibold'>Cum rap</span>}>
                            <Select placeholder='Chon cum rap' name='maRap' onChange={event => setFieldValue('maRap', event)}>
                                {renderTheaterGroup()}
                            </Select>
                        </Form.Item>

                        <Form.Item label={<span className='font-semibold'>Ngay khoi chieu</span>}>
                            <DatePicker style={{ width: '12rem' }} placeholder='Chon ngay khoi chieu'
                                format='DD/MM/YYYY' name='ngayChieuGioChieu'
                                onChange={value => setFieldValue('ngayChieuGioChieu', moment(value).format('YYYY-MM-DD HH:mm:ss'))} />
                            {errors.ngayChieuGioChieu && touched.ngayChieuGioChieu && <p className='text-danger'>{errors.ngayChieuGioChieu}</p>}
                        </Form.Item>

                        <Form.Item label={<span className='font-semibold'>Gia ve</span>}>
                            <InputNumber style={{ width: '8rem' }} min='0' name='giaVe' onChange={value => setFieldValue('giaVe', value)} />
                            {errors.giaVe && touched.giaVe && <p className='text-danger'>{errors.giaVe}</p>}
                        </Form.Item>

                        <Form.Item label={<span className='font-semibold'>Tac vu</span>}>
                            <Button type='primary' htmlType='submit'>Tao lich chieu</Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        </div>
    )
}
