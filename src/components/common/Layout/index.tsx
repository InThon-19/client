import { Layout as AntdLayout } from 'antd';

import Header from './Header';
import NavBar from './NavBar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <AntdLayout.Content className='mb-[50px]'>{children}</AntdLayout.Content>
      <NavBar />
    </div>
  );
};

export default Layout;
