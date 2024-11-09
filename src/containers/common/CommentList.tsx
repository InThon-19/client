import { Drawer, Flex, Typography } from 'antd';
import { useAtom } from 'jotai';

import PostCommentForm from './PostCommentForm';

import { commentsAtom } from '@/lib/jotai/comment';
import CommentItem from '@component/comments/CommentItem';

const CommentList = () => {
  const [comments, setComments] = useAtom(commentsAtom);
  if (!comments) return null;

  const { postId, commentList } = comments;
  return (
    <Drawer
      open={!!comments}
      onClose={() => setComments(null)}
      placement='bottom'
      closeIcon={null}
      height={'70%'}
      destroyOnClose
      styles={{
        header: { borderBottomWidth: 2 },
        body: { padding: 0 },
      }}
      title=<Typography.Title level={4}>평가 목록</Typography.Title>>
      {commentList.length === 0 ? (
        <Flex justify='center'>
          <Typography.Text strong className='mt-10'>
            평가가 없습니다.
          </Typography.Text>
        </Flex>
      ) : (
        <>
          {commentList.map((item, idx) => (
            <CommentItem key={idx} comment={item} />
          ))}
        </>
      )}
      <PostCommentForm postId={postId} />
    </Drawer>
  );
};

export default CommentList;
