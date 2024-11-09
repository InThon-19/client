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
        <Title level={1}>A..BCD</Title>
      </Header>
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
