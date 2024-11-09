import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, Layout as AntdLayout, Modal } from 'antd';
import { useAtom } from 'jotai';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { useEffect } from 'react';

import { writePostAtom } from '@/lib/jotai/modal';
import { userAtom } from '@/lib/jotai/user';
import WriteFloatButton from '@component/common/FloatButton';
import Layout from '@component/common/Layout';
import WritePost from '@container/modal/WritePost';
import { theme } from '@style/antd';
import '@style/tailwind.css';
import { observeAuthState } from '@util/api/auth';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
});

const client = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const [, setUser] = useAtom(userAtom);
  const [writePostModalOpen, setWritePostModalOpen] = useAtom(writePostAtom);

  useEffect(() => {
    observeAuthState((uid) => setUser({ uid }));
  }, [setUser]);

  return (
    <QueryClientProvider client={client}>
      <ConfigProvider theme={theme}>
        <AntdLayout style={{ backgroundColor: '#ffffff' }}>
          <main className={`${pretendard.variable} font-pretendard flex justify-center`}>
            <div className='relative max-w-[480px] w-full min-h-dvh border-x-2'>
              <Layout>
                <Component {...pageProps} />
                <WriteFloatButton />
                <Modal
                  title={null}
                  width={'80%'}
                  open={writePostModalOpen}
                  onCancel={() => setWritePostModalOpen(false)}
                  footer={null}
                  style={{ maxWidth: 400 }}
                  destroyOnClose>
                  <WritePost />
                </Modal>
              </Layout>
            </div>
          </main>
        </AntdLayout>
      </ConfigProvider>
    </QueryClientProvider>
  );
}
