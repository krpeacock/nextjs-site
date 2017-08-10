import Head from 'next/head'

export default (props) => (
  <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
    {props.children}
  </Head>
)