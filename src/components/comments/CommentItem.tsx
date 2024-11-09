import { Flex } from 'antd';

import { PostDto } from '@type/post/post';

interface Props {
  comment: PostDto['Comments'][number];
}

const CommentItem = ({ comment }: Props) => {
  return (
    <Flex align='center' gap={12} className='h-20 border-b-2 px-4'>
      {/* <div className='border-2 rounded-full w-8 aspect-square'></div> */}
      <div>{comment.UserId}</div>
      <div className='flex-1'>{comment.Body}</div>
      <div>{comment.Rating.toFixed(1)}</div>
    </Flex>
  );
};

export default CommentItem;
