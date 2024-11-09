import { CalendarOutlined, SearchOutlined, StockOutlined, UserOutlined } from '@ant-design/icons';
import { Layout as AntdLayout, Flex, Typography } from 'antd';

const { Header, Content } = AntdLayout;
const { Title } = Typography;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header className='flex items-center'>
        <Title level={1}>A..BCD</Title>
      </Header>
      <Content className='mb-[50px]'>{children}</Content>
      <Flex
        justify='space-around'
        className='fixed bottom-0 max-w-[476px] w-full h-[40px] text-2xl rounded-t-lg border-t-2 shadow-[0_-5px_10px_0_rgba(0,0,0,0.1)] bg-white'>
        <StockOutlined />
        <CalendarOutlined />
        <SearchOutlined />
        <UserOutlined />
      </Flex>
    </div>
  );
};

export default Layout;
