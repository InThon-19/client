import { Layout as AntdLayout, Typography } from 'antd';

const { Header, Content } = AntdLayout;
const { Title } = Typography;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header className='flex items-center'>
        <Title level={1}>ABCD</Title>
        <Content>{children}</Content>
      </Header>
    </div>
  );
};

export default Layout;
