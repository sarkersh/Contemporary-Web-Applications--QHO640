import { Layout, Menu } from 'antd';
import {
    SettingOutlined, UserOutlined,
    BellOutlined, HeartOutlined,
    LogoutOutlined
} from '@ant-design/icons';

import { signOut, onAuthStateChanged } from 'firebase/auth';
import {auth} from "../../firebase-config";
import {Notifications} from '../index.jsx';
import {useNavigate} from "react-router-dom";
import {  useState, useEffect } from 'react'

const { Sider, Content } = Layout;

function Dashboard() {

    const navigate = useNavigate();
    const [loginStatus, setLoginStatus] = useState('');


    // create a function to handle the logout logic
    const handleLogout = async () => {

        try {
            // sign out using firebase auth
            await signOut(auth);
            setLoginStatus("");
            console.log('user has just signed out!');

            // redirect to the home page
            navigate('/');

        } catch (error) {
            console.log('Sorry user cannot signed out!!!!');

        }
    };


    useEffect(() => {

        // listen to the auth state change event
        onAuthStateChanged(auth, (user) => {
            // check if user is logged in
            if (user) {
                // user is logged in, console log the message
                console.log('user is logged in');
                console.log(user.providerData[0]);
                setLoginStatus(user.providerData[0].providerId);

            } else {
                // user is not logged in, console log the message
                console.log('user not logged in');
                // redirect to the home page
                navigate('/');
            }
        });


    }, [loginStatus]);



    return (
        <Layout className="min-h-full">
            <Sider breakpoint="lg" collapsedWidth="0" bg="white" className="h-full">

                <Menu theme="light" mode="inline" defaultSelectedKeys={['3']}>
                    <Menu.Item key="1" icon={<SettingOutlined />}>
                        Settings
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        Profile
                    </Menu.Item>
                    <Menu.Item key="3" icon={<BellOutlined />}>
                        Notifications
                    </Menu.Item>
                    <Menu.Item key="4" icon={<HeartOutlined />}>
                        Wishlist
                    </Menu.Item>
                    <Menu.Item key="5" icon={<LogoutOutlined />}  >
                        <button onClick={handleLogout}>
                            Logout
                        </button>

                    </Menu.Item>
                </Menu>
                <div className={"h-full bg-white"}>
                    <ul>

                    </ul>

                </div>
            </Sider>
            <Layout>
                <Content className="p-8">

                    {/* Your content goes here */}
                    <Notifications />
                </Content>
            </Layout>
        </Layout>
    );
}

export default Dashboard;

