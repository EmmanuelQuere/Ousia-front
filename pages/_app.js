import store from '../redux/store';
import Layout from '../components/Layout'
import { Provider } from 'react-redux';
import Head from "next/head";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from './../components/AlertTemplate';
import '../styles/globals.css';
import '../styles/tailwind_utilities.css';
import "mapbox-gl/dist/mapbox-gl.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

const alertOptions = {
  position: positions.TOP_CENTER,
  timeout: 4000,
  offset: '10vh',
  transition: transitions.SCALE
}

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ousia Drinks</title>
    <link rel="shortcut icon" href="/logo.png" />
  </Head>
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...alertOptions}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AlertProvider>
  </Provider>

  </>
  );
  }

export default MyApp
