import { onAuthStateChanged, signOut } from 'firebase/auth';

import { client } from '.';

import { auth } from '@/lib/firebase';

export const checkUserExists = async (uid: string) => {
  try {
    await client.get(`/user/${uid}`);
    return true;
  } catch (error) {
    return false;
  }
};

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

export const register = async (
  userId: string,
  data: {
    Nickname: string | null;
    Email: string | null;
    ProfileImage: string | null;
  },
) => {
  try {
    await client.post(`/user/${userId}`, data);
  } catch (error) {
    console.error(error);
  }
};
