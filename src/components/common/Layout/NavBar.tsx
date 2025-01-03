import { CalendarOutlined, MenuOutlined, SearchOutlined, StockOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';

import { menuDrawerAtom } from '@/lib/jotai/drawer';

const ICON_CLASS = 'flex justify-center items-center w-full cursor-pointer';

const NavBar = () => {
  const router = useRouter();
  const [, setIsMenuDrawerOpen] = useAtom(menuDrawerAtom);

  return (
    <Flex
      justify='space-around'
      className='fixed bottom-0 max-w-[476px] w-full h-[40px] text-2xl rounded-t-lg border-t-2 shadow-[0_-5px_10px_0_rgba(0,0,0,0.1)] bg-white'>
      <StockOutlined className={ICON_CLASS} onClick={() => router.push({ pathname: '/' })} />
      <CalendarOutlined className={ICON_CLASS} onClick={() => router.push({ pathname: '/calendar' })} />
      <SearchOutlined className={ICON_CLASS} onClick={() => router.push({ pathname: '/explore' })} />
      <MenuOutlined className={ICON_CLASS} onClick={() => setIsMenuDrawerOpen(true)} />
    </Flex>
  );
};

export default NavBar;
