import '../styles/variables.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Next App Template</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
