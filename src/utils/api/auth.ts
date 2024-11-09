import { onAuthStateChanged, signOut } from 'firebase/auth';

import { auth } from '@/lib/firebase';

export const logout = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem('uid');
  } catch (error) {
    console.error(error);
  }
};

export const observeAuthState = (callback: (uid: string) => void) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      localStorage.setItem('uid', user.uid); // 로컬 저장소에 저장
      callback(user.uid);

      return;
    }

    localStorage.removeItem('user'); // 로그아웃 시 로컬 저장소에서 제거
  });
};
