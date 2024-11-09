import { CalendarOutlined, SearchOutlined, StockOutlined, UserOutlined } from '@ant-design/icons';
import { Flex } from 'antd';

const NavBar = () => {
  return (
    <Flex
      justify='space-around'
      className='fixed bottom-0 max-w-[476px] w-full h-[40px] text-2xl rounded-t-lg border-t-2 shadow-[0_-5px_10px_0_rgba(0,0,0,0.1)] bg-white'>
      <StockOutlined className='flex justify-center items-center w-full' />
      <CalendarOutlined className='flex justify-center items-center w-full' />
      <SearchOutlined className='flex justify-center items-center w-full' />
      <UserOutlined className='flex justify-center items-center w-full' />
    </Flex>
  );
};

export default NavBar;
