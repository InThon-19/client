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
      alert('로그인이 되어 있다.');
      router.replace('/');
    });
  }, [router]);

  const handleGoogleLogin = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider.google);
      localStorage.setItem('uid', user.uid);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex justify-center' onClick={handleGoogleLogin}>
      <Image src={'/icons/google_login@2x.png'} width={300} height={40} alt='구글 로그인' />
    </div>
  );
};

export default LoginPage;
