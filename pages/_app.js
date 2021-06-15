import store from '../redux/store';
import Layout from '../components/Layout'
import { Provider } from 'react-redux';
import '../styles/globals.css';
import '../styles/tailwind_utilities.css';
import Head from "next/head";
import Footer from "../components/footer"

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
     <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
  <Footer/>

  </>
  );
  }

export default MyApp
