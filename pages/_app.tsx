import 'src/styles/main.scss';
import 'src/styles/global.css';
import 'antd/dist/reset.css';
import type { AppProps } from 'next/app';
import MyLayout from 'src/components/Layout';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { wrapper } from 'src/store';
import { ThemeProvider } from 'src/theme';
import Head from 'next/head';
import { StyledComponentsRegistry } from 'src/components/Registry';
import useDynamicStyles from 'src/hooks/useDynamicStyles';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import dayjs from 'dayjs';

dayjs.extend(duration);
dayjs.extend(utc);

function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  const { props, store } = wrapper.useWrappedStore(pageProps);
  useDynamicStyles()
  return (
    <ThemeProvider defaultTheme="dark" enableSystem>
      <Head>
        <link rel="icon" href="./favicon/favicon.svg" sizes="any" />
        <title>Becen</title>
      </Head>
      <ConfigProvider
        theme={
          {
            // algorithm: theme.darkAlgorithm,
          }
        }>
          <Provider store={store}>
            <StyledComponentsRegistry>
              <MyLayout>
                <Component {...props} />
              </MyLayout>
            </StyledComponentsRegistry>
          </Provider>

      </ConfigProvider>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);
