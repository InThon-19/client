import { PlusOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import RootContainer from '@container/root';
import { HomePageQuerySchema } from '@type/zod/pages/main';

const PageRoot: NextPage = () => {
  const router = useRouter();
  const { success, data } = HomePageQuerySchema.safeParse(router.query);
  if (!success) return null;

  return <RootContainer query={data} />;
};

export default PageRoot;
