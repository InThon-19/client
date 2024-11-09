import { Drawer, Flex, Typography } from 'antd';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { menuDrawerAtom } from '@/lib/jotai/drawer';
import { userAtom } from '@/lib/jotai/user';
import { logout } from '@util/api/auth';

const MenuDrawer = () => {
  const router = useRouter();
  const [user] = useAtom(userAtom);
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useAtom(menuDrawerAtom);

  useEffect(() => {
    setIsMenuDrawerOpen(false);
  }, [router, setIsMenuDrawerOpen]);

  const handleLogout = () => {
    logout();
    router.reload();
  };

  return (
    <Drawer open={isMenuDrawerOpen} onClose={() => setIsMenuDrawerOpen(false)} closeIcon={null} width={300}>
      {user?.uid ? (
        <Flex vertical>
          <Typography.Text className='flex items-center h-10 w-full cursor-pointer' onClick={handleLogout}>
            로그아웃
          </Typography.Text>
          <Typography.Text className='flex items-center h-10 w-full cursor-pointer'>회원탈퇴</Typography.Text>
        </Flex>
      ) : (
        <Typography.Text
          className='flex items-center w-full h-10 cursor-pointer'
          onClick={() => router.push({ pathname: '/login' })}>
          로그인/회원가입
        </Typography.Text>
      )}
    </Drawer>
  );
};

export default MenuDrawer;
