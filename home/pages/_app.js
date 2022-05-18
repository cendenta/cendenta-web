import '../styles/globals.css';
import '../utils/icons/font-awesome';
import Layout from '../components/_layout'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => (<Layout>{page}</Layout>))
    return (
        <ThemeProvider attribute="class">
            {getLayout(<Component {...pageProps} />)}            
        </ThemeProvider>
    )
}

export default MyApp;  