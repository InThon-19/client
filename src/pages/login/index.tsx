import { Flex, Typography } from 'antd';
import { signInWithPopup } from 'firebase/auth';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { auth, provider } from '@/lib/firebase';
import { observeAuthState } from '@util/api/auth';

const LoginPage = () => {
  const router = useRouter();

  useEffect(() => {
    observeAuthState(() => {
      router.replace('/');
    });
  }, [router]);

  const handleGoogleLogin = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider.google);
      localStorage.setItem('uid', user.uid);

      router.push({ pathname: '/login' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex justify='center' gap={20} className='absolute top-0 w-full h-screen' vertical>
      <Typography.Title level={2} className='text-center'>
        로그인/회원가입
      </Typography.Title>
      <button className='flex justify-center w-full' onClick={handleGoogleLogin}>
        <Image src={'/icons/google_login@2x.png'} width={300} height={40} alt='구글 로그인' />
      </button>
    </Flex>
  );
};

export default LoginPage;
