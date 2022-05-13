import '../styles/globals.css';
import '../utils/icons/font-awesome';
import Layout from '../components/_layout'

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => (<Layout>{page}</Layout>))
    return getLayout(<Component {...pageProps} />)
}

export default MyApp;  