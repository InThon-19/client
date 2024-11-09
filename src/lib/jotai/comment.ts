import { atom } from 'jotai';

import { PostDto } from '@type/post/post';

export const commentsAtom = atom<{ postId: string; commentList: PostDto['Comments'] } | null>(null);
