import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
// import store from '../store'

import Head from 'next/head'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* Replace div with Provider once store file is updated and stores are added */}
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
    </div>
  )
}

export default MyApp
