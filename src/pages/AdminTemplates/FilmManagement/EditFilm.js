import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Form,
    Input,
    Button,
    Radio,
    DatePicker,
    InputNumber,
    Switch,
} from 'antd';
import { useFormik } from 'formik';
import *as Yup from 'yup'
import moment from 'moment';

import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import { editFilm } from '../../../redux/actions/film';
import { getDetailFilm } from '../../../redux/actions/filmInfo';


export default function EditFilm(props) {
    const [componentSize, setComponentSize] = useState('default');

    const { id } = props.match.params
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDetailFilm(id))
    }, [])
    const { filmInfo } = useSelector(state => state.DetailFilm_Reducer)
    const [state, setState] = useState({ img: filmInfo?.hinhAnh })

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: filmInfo?.maPhim,
            tenPhim: filmInfo?.tenPhim,
            trailer: filmInfo?.trailer,
            moTa: filmInfo?.moTa,
            maNhom: 'GP01',
            ngayKhoiChieu: filmInfo?.ngayKhoiChieu,
            sapChieu: filmInfo?.sapChieu,
            dangChieu: filmInfo?.dangChieu,
            hot: filmInfo?.hot,
            danhGia: filmInfo?.danhGia,
            hinhAnh: null
        },
        onSubmit: values => {
            const formData = new FormData()
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key])
                } else {
                    if (values.hinhAnh !== null) {
                        formData.append('File', values[key])
                    }
                }
            }
            dispatch(editFilm(formData, props.history))

        },
        validationSchema: Yup.object({
            tenPhim: Yup.string().required('Ten phim khong de trong'),
            trailer: Yup.string().required('Trailer khong de trong'),
            moTa: Yup.string().required('Mo ta phim khong de trong'),
            ngayKhoiChieu: Yup.string().required('Chua chon ngay khoi chieu'),
        })
    })
    const { handleSubmit, handleChange, setFieldValue, errors, touched, values } = formik

    return (
        <div>
            <div className='flex items-center gap-3 mb-4'>
                <MovieCreationIcon className='text-blue-900' />
                <span className='text-4xl text-blue-900 font-semibold'>Phim {filmInfo?.tenPhim}</span>
            </div>

            <div className='-ml-16 pt-2'>
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
                    <Form.Item label="Form Size" name="size">
                        <Radio.Group>
                            <Radio.Button value="small">Small</Radio.Button>
                            <Radio.Button value="default">Default</Radio.Button>
                            <Radio.Button value="large">Large</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Ten phim">
                        <Input name='tenPhim' value={values.tenPhim} onChange={handleChange} />
                        {errors.tenPhim && touched.tenPhim && <p className='text-danger'>{errors.tenPhim}</p>}
                    </Form.Item>
                    <Form.Item label="Trailer">
                        <Input name='trailer' value={values.trailer} onChange={handleChange} />
                        {errors.trailer && touched.trailer && <p className='text-danger'>{errors.trailer}</p>}
                    </Form.Item>
                    <Form.Item label="Mo ta">
                        <Input name='moTa' value={values.moTa} onChange={handleChange} />
                        {errors.moTa && touched.moTa && <p className='text-danger'>{errors.moTa}</p>}
                    </Form.Item>

                    <Form.Item label="Ngay khoi chieu">
                        <DatePicker format='DD/MM/YYYY' placeholder='Chon ngay' name='ngayKhoiChieu' value={moment(values.ngayKhoiChieu)}
                            onChange={value => setFieldValue('ngayKhoiChieu', moment(value).format('YYYY-MM-DD HH:mm:ss'))} />
                        {errors.ngayKhoiChieu && touched.ngayKhoiChieu && <p className='text-danger'>{errors.ngayKhoiChieu}</p>}
                    </Form.Item>
                    <Form.Item label="Dang chieu" valuePropName="checked">
                        <Switch name='dangChieu' checked={values.dangChieu} onChange={value => setFieldValue('dangChieu', value)} />
                    </Form.Item>
                    <Form.Item label="Sap chieu" valuePropName="checked">
                        <Switch name='sapChieu' checked={values.sapChieu} onChange={value => setFieldValue('sapChieu', value)} />
                    </Form.Item>
                    <Form.Item label="Hot" valuePropName="checked">
                        <Switch name='hot' checked={values.hot} onChange={value => setFieldValue('hot', value)} />
                    </Form.Item>
                    <Form.Item label="So sao">
                        <InputNumber defaultValue='1' min='0' max='10' name='danhGia' value={values.danhGia}
                            onChange={value => setFieldValue('danhGia', value)} />
                    </Form.Item>
                    <Form.Item label="Hinh anh">
                        <input type='file' name='hinhAnh' accept='image/jpg, image/jpeg, image/png'
                            onChange={e => {
                                setFieldValue('hinhAnh', e.target.files[0])
                                setState({ img: URL.createObjectURL(e.target.files[0]) })
                            }} />
                        <img className='w-20 object-cover mt-2' src={state.img} alt='' />
                    </Form.Item>
                    <Form.Item label="Tac vu">
                        <Button type='primary' htmlType='submit'>Cap nhat phim</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
