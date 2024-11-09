import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

import { theme } from '@style/antd';
import '@style/tailwind.css';

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
  return (
    <main className={`${pretendard.variable} font-pretendard`}>
      <QueryClientProvider client={client}>
        <ConfigProvider theme={theme}>
          <Component {...pageProps} />;
        </ConfigProvider>
      </QueryClientProvider>
    </main>
  );
}
