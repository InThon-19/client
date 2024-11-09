import { Flex, Modal, Typography } from 'antd';
import { useAtom } from 'jotai';
import Image from 'next/image';

import { postAtom } from '@/lib/jotai/modal';

const PostModal = () => {
  const [post, setPost] = useAtom(postAtom);

  if (!post) return null;

  return (
    <Modal
      title={null}
      width={'80%'}
      open={!!post}
      onCancel={() => setPost(null)}
      footer={null}
      style={{ maxWidth: 400 }}
      destroyOnClose>
      <div className='w-full aspect-square relative'>
        {post?.Image && (
          <>
            <Image src={post?.Image} alt='이미지' fill style={{ objectFit: 'contain' }} />
            <Flex className='absolute left-2 bottom-16' vertical>
              <Typography.Text className='text-white'>{post.What}</Typography.Text>
              <Typography.Text className='text-white'>{post.When}</Typography.Text>
              <Typography.Text className='text-white'>{post.How}</Typography.Text>
              <Typography.Text className='text-white'>{post.What}</Typography.Text>
            </Flex>
          </>
        )}
      </div>
    </Modal>
  );
};

export default PostModal;
