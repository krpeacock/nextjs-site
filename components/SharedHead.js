import Head from 'next/head'
import React from 'react'
import _JSXStyle from 'styled-jsx/style'

export default (props) => (
  <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,700,400italic,700italic&subset=latin,latin-ext" rel="stylesheet"/>
    {props.children}
  </Head>
)