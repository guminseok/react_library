import type { AppProps } from 'next/app';
import 'sanitize.css';
import 'swiper/css/bundle';

// .env の設定が on の時にmswがインターセプト
if (process.env.NEXT_PUBLIC_API_MOCKING === 'on') {
  require('../mocks');
}
const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
