import { atom } from 'jotai';

export const userAtom = atom<{ uid: string | null }>({ uid: null });
