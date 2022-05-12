// import App from 'next/app'
import { DefaultSeo } from 'next-seo';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SEO from '../next-seo.config';
import '../styles/globals.css';
import '../utils/icons/font-awesome';

function MyApp({ Component, pageProps }) {
    const showHeaderFooter = Component?.name !== 'NotFound';
    return (
        <>
            <DefaultSeo {...SEO} />
            {showHeaderFooter && <Header />}
            <Component {...pageProps} />
            {showHeaderFooter && <Footer />}
        </>
    )
}

export default MyApp;  