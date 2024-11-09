import { VideoCameraAddOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { useAtom } from 'jotai';

import { writePostAtom } from '@/lib/jotai/modal';

const WriteFloatButton = () => {
  const [, setWritePostModalOpen] = useAtom(writePostAtom);

  return (
    <div className='absolute right-12'>
      <FloatButton
        type='primary'
        style={{ insetInlineEnd: 'unset' }}
        icon={<VideoCameraAddOutlined />}
        onClick={() => setWritePostModalOpen(true)}
      />
    </div>
  );
};

export default WriteFloatButton;
