import Document, { Html, Head, Main, NextScript } from 'next/document'; // eslint-disable-line

export default class MyDocument extends Document {
    render(){
        const language = "pt"
        return (
            <Html
                lang={language}
                prefix="og: https://ogp.me/ns#">
                <Head>
                    <meta property="og:title" content="NextFlix"/>
                    <meta property="og:locale" content={language}/>
                    <meta property="og:site_name" content="Nextflix"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" 
                        rel="stylesheet"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}