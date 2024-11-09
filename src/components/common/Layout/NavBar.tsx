import { CalendarOutlined, SearchOutlined, StockOutlined, UserOutlined } from '@ant-design/icons';
import { Flex } from 'antd';

const ICON_CLASS = 'flex justify-center items-center w-full cursor-pointer';

const NavBar = () => {
  return (
    <Flex
      justify='space-around'
      className='fixed bottom-0 max-w-[476px] w-full h-[40px] text-2xl rounded-t-lg border-t-2 shadow-[0_-5px_10px_0_rgba(0,0,0,0.1)] bg-white'>
      <StockOutlined className={ICON_CLASS} />
      <CalendarOutlined className={ICON_CLASS} />
      <SearchOutlined className={ICON_CLASS} />
      <UserOutlined className={ICON_CLASS} />
    </Flex>
  );
};

export default NavBar;
