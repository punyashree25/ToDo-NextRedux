import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'

// import Header from '../layout/Header'
// import Footer from '../layout/Footer'

const Header = dynamic(() => import('./Header'))
const Footer = dynamic(() => import('./Footer'))

const App = ({ children, title = "" }) => {
    return (
        <div className="">
            <Head>
                <title>{title}</title>
            </Head>
            <section>
                <Header />
            </section>
            <section>
                {children}
            </section>
            <section>
                <Footer />
            </section>
        </div>
    );
}

export default App;
