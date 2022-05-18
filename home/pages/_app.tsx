import '../styles/globals.css';
import '../utils/icons/font-awesome';
import Layout from '../components/_layout'
import { ThemeProvider } from 'next-themes'
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';

type GetLayout = (page: ReactNode) => ReactNode;

type Page<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: GetLayout;
};

type MyAppProps<P = {}> = AppProps<P> & {
    Component: Page<P>;
};

function MyApp({ Component, pageProps }: MyAppProps) {
    const getLayout = Component.getLayout || ((page: ReactNode) => (<Layout>{page}</Layout>))
    return (
        <ThemeProvider attribute="class">
            {getLayout(<Component {...pageProps} />)}            
        </ThemeProvider>
    )
}

export default MyApp;  