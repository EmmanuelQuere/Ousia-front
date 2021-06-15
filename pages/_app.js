import store from '../redux/store';
import { Provider } from 'react-redux';
import '../styles/globals.css';
import '../styles/tailwind_utilities.css';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
     <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>

  </>
  );
  }

export default MyApp
