import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Tabs } from 'antd';
import Slider from '../../Home/Slider'
import Loading from '../../../_components/Loading/Loading'
import { getUserInfo } from '../../../../redux/actions/userInfo'
import UserInfo from './UserInfo';
import BookingHistory from './BookingHistory';

const { TabPane } = Tabs;

export default function Profile() {
    const { taiKhoan } = JSON.parse(localStorage.getItem('USER_LOGIN'))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserInfo(taiKhoan))
    }, [])

    const { userInfo, loading } = useSelector(state => state.UserInfo_Reducer)
    console.log(userInfo)

    return (
        <div>
            {loading ? <Loading /> : ''}
            <Slider />
            <div style={{ width: '70%' }} className='mx-auto my-8'>
                <Tabs type="card">
                    <TabPane tab="THÔNG TIN CÁ NHÂN" key="1">
                        <UserInfo userInfo={userInfo} />
                    </TabPane>
                    <TabPane tab="LỊCH SỬ ĐẶT VÉ" key="2">
                        <BookingHistory userInfo={userInfo} />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}
