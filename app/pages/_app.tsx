import type { AppProps } from 'next/app';
import UserProvider from "../context/user";
import '../styles/globals.css';
import Nav from "../components/nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Nav />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp
