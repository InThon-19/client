import { Layout } from 'antd';
import Image from 'next/image';

const Header = () => {
  return (
    <Layout.Header className='flex items-center mb-4 px-4'>
      <Image src='/icons/logo.svg' alt='' width={100} height={40} />
    </Layout.Header>
  );
};

export default Header;
