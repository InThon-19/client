import { Flex } from 'antd';

import { PostDto } from '@type/post/post';

interface Props {
  comment: PostDto['Comments'][number];
}

const CommentItem = ({ comment }: Props) => {
  return (
    <Flex align='center' gap={12} className='h-20 border-b-2 px-4'>
      <div className='border-2 rounded-full w-8 aspect-square'></div>
      <div>댓글 내용 들어갈 거에요.</div>
    </Flex>
  );
};

export default CommentItem;
