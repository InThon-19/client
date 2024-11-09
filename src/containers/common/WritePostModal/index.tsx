import { Modal } from 'antd';
import { useAtom } from 'jotai';

import WritePostForm from './WritePostForm';

import { writePostAtom } from '@/lib/jotai/modal';
import { userAtom } from '@/lib/jotai/user';

const WritePostModal = () => {
  const [user] = useAtom(userAtom);
  const [writePostModalOpen, setWritePostModalOpen] = useAtom(writePostAtom);

  if (writePostModalOpen && !user) {
    alert('로그인이 필요합니다.');
    setWritePostModalOpen(false);
    return null;
  }

  return (
    <Modal
      title={null}
      width={'80%'}
      open={writePostModalOpen}
      onCancel={() => setWritePostModalOpen(false)}
      footer={null}
      style={{ maxWidth: 400 }}
      destroyOnClose>
      <WritePostForm />
    </Modal>
  );
};

export default WritePostModal;
