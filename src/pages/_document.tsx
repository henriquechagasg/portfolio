import Document, { Html, Head, Main, NextScript } from 'next/document';
import { UsePlayer } from '../contexts/player-context/player.context';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;600;800&family=Ubuntu:ital@0;1&display=swap" rel="stylesheet"></link>
                    <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
                    <link rel="icon" href="extraterrestre.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}