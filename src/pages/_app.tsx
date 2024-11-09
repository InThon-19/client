import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, Layout as AntdLayout } from 'antd';
import { useAtom } from 'jotai';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { useEffect } from 'react';

import { userAtom } from '@/lib/jotai/user';
import WriteFloatButton from '@component/common/FloatButton';
import Layout from '@component/common/Layout';
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

  useEffect(() => {
    observeAuthState((uid) => setUser({ uid }));
  }, [setUser]);

  return (
    <QueryClientProvider client={client}>
      <ConfigProvider theme={theme}>
        <AntdLayout style={{ backgroundColor: '#ffffff' }}>
          <main className={`${pretendard.variable} font-pretendard flex justify-center`}>
            <div className='relative max-w-[480px] w-full'>
              <Layout>
                <Component {...pageProps} />
                <WriteFloatButton />
              </Layout>
            </div>
          </main>
        </AntdLayout>
      </ConfigProvider>
    </QueryClientProvider>
  );
}
