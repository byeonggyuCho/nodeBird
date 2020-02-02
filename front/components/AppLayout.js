import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import { Menu, Input, Button, Row, Col, Card, Avatar, Form } from 'antd';
import LoginForm = from './LoginForm';
import UserProfile = from './UserProfile';
import { useSelector } from 'react-redux';


const Applayout = ({ children }) => {
    const { isLoggedIn } = useSelector(state => state.user)

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key=""><Link href="/"><a>Node bird</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>profile</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
            </Menu>

            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn
                        ? <UserProfile />
                        : <LoginForm />}
                    <Link href="/signup"><Button>Join</Button></Link>
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <Link href="http:www.naver.com"><a target="_black" >Link</a></Link>
                </Col>
            </Row>
            {children}
        </div >
    );
};

AppLayout.propTypes = {
    childen: PropTypes.node
}

export default AppLayout;