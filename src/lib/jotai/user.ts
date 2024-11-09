import { atom } from 'jotai';

export const userAtom = atom<{ uid: string } | null>(null);
