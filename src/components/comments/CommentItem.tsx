import { Flex, Typography } from 'antd';
import Image from 'next/image';

import { PostDto } from '@type/post/post';

interface Props {
  comment: PostDto['Comments'][number];
}

const CommentItem = ({ comment }: Props) => {
  return (
    <Flex align='center' gap={12} className='h-20 border-b-2 px-4'>
      <div className='border-2 rounded-full w-8 aspect-square relative'>
        <Image className='rounded-full' src={comment.UserId.ProfileImage} alt='유저 프로필 이미지' fill />
      </div>
      <Typography.Text ellipsis className='grow-0  basis-16'>
        {comment.UserId.Nickname}
      </Typography.Text>
      <div className='flex-1'>{comment.Body}</div>
      <div>{comment.Rating.toFixed(1)}</div>
    </Flex>
  );
};

export default CommentItem;
