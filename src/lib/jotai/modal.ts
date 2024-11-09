import { atom } from 'jotai';

import { PostDto } from '@type/post/post';

export const writePostAtom = atom<boolean>(false);

export const postAtom = atom<PostDto['Records'][number] | null>(null);
