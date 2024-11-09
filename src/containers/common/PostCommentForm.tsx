import { Button, Flex, Input, Rate } from 'antd';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { userAtom } from '@/lib/jotai/user';
import { postComment } from '@util/api/comment';

interface Props {
  postId: string;
}

const PostCommentForm = ({ postId }: Props) => {
  const router = useRouter();
  const [user] = useAtom(userAtom);

  const [rating, setRating] = useState(5);
  const [body, setBody] = useState('');

  const onSubmit = async () => {
    if (!user) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (!body) {
      alert('평가를 입력해 주세요.');
      return;
    }

    try {
      await postComment(postId, {
        UserId: user.uid,
        Rating: rating,
        Body: body,
      });

      router.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Flex justify='center' className='mt-5 mb-5'>
        <Rate value={rating} onChange={(value) => setRating(value)} allowClear={false} />
      </Flex>
      <Flex gap={4} align='center'>
        <Input placeholder='평가를 남겨주세요.' value={body} onChange={(e) => setBody(e.target.value)} />
        <Button type='primary' onClick={onSubmit}>
          저장
        </Button>
      </Flex>
    </div>
  );
};

export default PostCommentForm;
