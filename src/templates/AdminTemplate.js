import React, { useState } from "react";
import { NavLink, Route, useHistory } from "react-router-dom";
import { Dropdown, Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    SettingOutlined,
    LoginOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Badge } from 'antd';
import GridViewIcon from '@mui/icons-material/GridView';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { ReactComponent as Logo } from '../assets/image/logo-cybersoft-gradient.svg'



const AdminTemplate = (props) => {
    const { Header, Sider, Content } = Layout;

    const [state, setState] = useState({ collapsed: false })
    const toggle = () => setState({ collapsed: !state.collapsed })

    const history = useHistory()

    let { Component, ...restProps } = props

    const menu = (
        <Menu style={{ borderRadius: '0.6rem' }} className="w-32">
            <Menu.Item key='1' icon={<UserOutlined />} >
                <span>Profile</span>
            </Menu.Item>
            <Menu.Item key='2' icon={<SettingOutlined />}>
                <span>Setting</span>
            </Menu.Item>
            <Menu.Item style={{ borderTop: '1px solid #c9c9c9' }} key='3'
                icon={<LogoutOutlined />}
                onClick={() => {
                    localStorage.removeItem('USER_LOGIN')
                    history.replace('/')
                }} >
                <span>Log out</span>
            </Menu.Item>
        </Menu >
    );

    return <Route {...restProps} render={(Routeprops) => {
        return (
            <Layout style={{ height: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={state.collapsed}>
                    <div className="logo">
                        <NavLink to='/admin/dashboard'>
                            <Logo className="w-10/12 h-full mx-auto mt-4 mb-10" />
                        </NavLink>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <NavLink to='/admin/film-management'>Quan ly phim</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            <NavLink to='/admin/user-management'>Quan ly nguoi dung</NavLink>
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background flex justify-between items-center pl-4">
                        {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                        <div className="flex gap-12">
                            <div className="flex items-center gap-6">
                                <Badge count={5}>
                                    <NotificationsOutlinedIcon />
                                </Badge>
                                <Badge count={8}>
                                    <ChatBubbleOutlineOutlinedIcon />
                                </Badge>
                            </div>
                            <div className="flex items-center gap-3 cursor-pointer">
                                <img className="w-10 h-10 rounded-full" src="https://picsum.photos/200" alt='' />
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold">Paula Seitz</span>
                                    <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
                                        <span className="text-sm text-gray-400 font-medium">FrontEnd Dev</span>
                                    </Dropdown>
                                </div>
                            </div>

                        </div>
                    </Header>
                    <Content
                        className="site-layout-background min-h-full p-4 my-6 mx-4"
                    >
                        <Component {...Routeprops} />
                    </Content>
                </Layout>
            </Layout >
        )
    }} />
}
export default AdminTemplate