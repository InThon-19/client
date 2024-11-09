import { PlusOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

const WriteFloatButton = () => {
  return (
    <div className='absolute right-12'>
      <FloatButton type='primary' style={{ insetInlineEnd: 'unset' }} icon={<PlusOutlined />} />
    </div>
  );
};

export default WriteFloatButton;
