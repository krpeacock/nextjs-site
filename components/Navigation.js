import Link from 'next/link'
import React from 'react'
import NoSSR from 'react-no-ssr'
import 'isomorphic-fetch'

// Next.js uses these Link components for cross-page routing

export default class Navigation extends React.Component {
  
  render (props) {
    let pathname = this.props.url
    console.log(pathname)
    return (<nav>
      <Link href='/'>
        <a 
          className={pathname ==='/' ? 'active' : ''}
        >Home</a>
      </Link>
      <Link href='/blog'>
        <a
          className={pathname ==='/blog' ? 'active' : ''}
        >Blog</a>
      </Link>
      <Link href='/contact'>
        <a
          className={pathname ==='/contact' ? 'active' : ''}
        >Contact</a>
      </Link>
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
          color: #b5c0d1;
        }
        a:hover, a.active {
          color: #415161;
        }
        nav {
          margin-bottom: 1em;
        }
      `}</style>
    </nav>)
  }
}