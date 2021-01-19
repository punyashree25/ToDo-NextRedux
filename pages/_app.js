import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from '../store'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>To Do App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Website to create and manage your to-do list."
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
