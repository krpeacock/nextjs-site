import Head from 'next/head'
import React from 'react'
import _JSXStyle from 'styled-jsx/style'

export default (props) => (
  <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,700,400italic,700italic&subset=latin,latin-ext" rel="stylesheet"/>
    {props.children}
    <style jsx global>{`
      * {
        font-family: "Roboto" !important;
      }
      .app {
        width: 100vw;
        position: relative;
        left: 0;
        top: 0;
        margin-top: 1em;
      }
      nav > a, nav > a:visited {
        margin: 1em;
        text-decoration: none;
        color: #b5c0d1
      }
      a:hover, a.active {
        color: #415161
      }
      nav {
        margin-bottom: 1em;
      }
  `}</style>
  </Head>
)