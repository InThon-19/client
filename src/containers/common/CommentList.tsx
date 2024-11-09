import { Drawer, Typography } from 'antd';
import { useAtom } from 'jotai';

import { commentsPostIdAtom } from '@/lib/jotai/comment';
import CommentItem from '@component/comments/CommentItem';

const CommentList = () => {
  const [commentListId, setCommentListId] = useAtom(commentsPostIdAtom);
  if (!commentListId) return null;

  return (
    <Drawer
      open={true}
      onClose={() => setCommentListId(null)}
      placement='bottom'
      closeIcon={null}
      height={'70%'}
      destroyOnClose
      styles={{
        header: { borderBottomWidth: 2 },
        body: { padding: 0 },
      }}
      title=<Typography.Title level={4}>평가 목록</Typography.Title>>
      {Array.from({ length: 50 }, (_, idx) => (
        <CommentItem key={idx} />
      ))}
    </Drawer>
  );
};

export default CommentList;
