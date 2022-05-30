import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Layout({ children }) {
    return (
        <>
            <DefaultSeo {...SEO} />
            <Header />
            <main className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900">{children}</main>
            <Footer />
        </>
    )
}