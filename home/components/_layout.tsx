import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
    return (
        <>
            <DefaultSeo {...SEO} />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}