import { Modal } from 'antd';
import { useAtom } from 'jotai';

import WritePostForm from './WritePostForm';

import { writePostAtom } from '@/lib/jotai/modal';

const WritePostModal = () => {
  const [writePostModalOpen, setWritePostModalOpen] = useAtom(writePostAtom);

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
