// import App from 'next/app'
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';
import '../utils/icons/font-awesome';

function MyApp({ Component, pageProps }) {
    const showHeaderFooter = Component?.name !== 'NotFound';

    return (
        <>
            {showHeaderFooter && <Header />}
            <Component {...pageProps} />
            {showHeaderFooter && <Footer />}
        </>
    )
}

export default MyApp;  