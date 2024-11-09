import { atom } from 'jotai';

import { PostDto } from '@type/post/post';

export const commentsAtom = atom<PostDto['Comments'] | null>(null);
