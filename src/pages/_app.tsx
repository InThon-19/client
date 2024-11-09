import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, Layout } from 'antd';
import { useAtom } from 'jotai';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { useEffect } from 'react';

import { userAtom } from '@/lib/jotai/user';
import WriteFloatButton from '@component/common/FloatButton';
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
        <Layout>
          <main className={`${pretendard.variable} font-pretendard flex justify-center`}>
            <div className='relative max-w-[480px] w-full'>
              <Component {...pageProps} />
              <WriteFloatButton />
            </div>
          </main>
        </Layout>
      </ConfigProvider>
    </QueryClientProvider>
  );
}
