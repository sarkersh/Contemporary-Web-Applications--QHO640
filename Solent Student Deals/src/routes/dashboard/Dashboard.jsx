import { Layout, Menu } from 'antd';
import {
    SettingOutlined, UserOutlined,
    BellOutlined, HeartOutlined,
    LogoutOutlined
} from '@ant-design/icons';

const { Sider, Content } = Layout;

import {Notifications} from '../index.jsx';


function Dashboard() {
    return (
        <Layout className="min-h-full">
            <Sider breakpoint="lg" collapsedWidth="0" bg="white" className="h-full">

                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
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
                    <Menu.Item key="5" icon={<LogoutOutlined />}>
                        Logout
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

